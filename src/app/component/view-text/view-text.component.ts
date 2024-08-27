import { Component, OnInit } from '@angular/core';
import { TextItem } from '../../model/text.model';
import { ActivatedRoute, Router } from '@angular/router';
import { TextService } from '../../services/text.service';

@Component({
  selector: 'app-view-text',
  standalone: true,
  imports: [],
  templateUrl: './view-text.component.html',
  styleUrl: './view-text.component.css'
})
export class ViewTextComponent implements OnInit {
  constructor(private route: ActivatedRoute, private textService: TextService, private router: Router) { }
  textEmplloy: TextItem={
    id:0,
    name: '',
    textBox: '',
    info: ''
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const text = params.get('name');
        if (text) {
          this.textService.getTextByName(text)
            .subscribe({
              next: (response) => {
                this.textEmplloy = response;
              }
            });
        }
      }
    });
  }

}
