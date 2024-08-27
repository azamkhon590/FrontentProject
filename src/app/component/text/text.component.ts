import { Component, OnInit } from '@angular/core';
import { TextService } from '../../services/text.service';
import { TextItem } from '../../model/text.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-text',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './text.component.html',
  styleUrl: './text.component.css'
})
export class TextComponent implements OnInit {
  texts: TextItem[] = [];

  constructor(private textService: TextService) { }
  ngOnInit(): void {
    this.textService.getTexts()
      .subscribe({
        next: (text) => {
          this.texts = text;
        },
        error: (response) => {
          console.log(response);
        }
      });
  }

}
