import { Component, OnInit } from '@angular/core';
import { TextItem } from '../../model/text.model';
import { TextService } from '../../services/text.service';
import { Router, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-text',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './add-text.component.html',
  styleUrl: './add-text.component.css'
})
export class AddTextComponent implements OnInit{

  constructor(private textService:TextService, private router:Router){}

  addText: TextItem={
    id:0,
    name: '',
    textBox: '',
    info: ''
  }
  ngOnInit(): void {
    
  }
  addTextBlock() {
    this.textService.addText(this.addText)
      .subscribe({
        next: (text) => {
          this.router.navigate(['/']);
        },
        error:(res)=>{
          console.log(res);
        }
      });
  }

}
