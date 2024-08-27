import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TextItem } from '../model/text.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TextService {
  deleteProduct(id: number) :Observable<TextItem> {
    return this.http.delete<TextItem>('https://localhost:7196/api/Text/'+id);
  }
  constructor(private http: HttpClient) { }
  getTexts():Observable<TextItem[]>{
    return this.http.get<TextItem[]>('https://localhost:7196/api/Text');
  }
  getTextByName(name:string):Observable<TextItem>{
    return this.http.get<TextItem>('https://localhost:7196/api/Text/'+name);
  }
  addText(addTextItem:TextItem):Observable<TextItem>{
    return this.http.post<TextItem>('https://localhost:7196/api/Text/add', addTextItem);
  }
  
}
