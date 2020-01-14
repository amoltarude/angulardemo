import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Note } from './note/note';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteService 
{

  constructor(private httpClient:HttpClient) { }

  getNote():Observable<Note[]>
  {
    return this.httpClient.get<Note[]>('http://localhost:3000/notes');
  }

  addNote(note:Note)
  {
    return this.httpClient.post<Note>('http://localhost:3000/notes',note);
  }
}