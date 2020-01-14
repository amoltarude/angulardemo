import { Component, OnInit } from '@angular/core';
import { Note } from './note';
import { NoteService } from '../note.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  note:Note;
  noteList:Note[];

  test:string;

  constructor(private noteservice:NoteService) 
  { 
    this.test="Stackroute";
    this.note=new Note();
    this.noteList=[];
  }

  ngOnInit() 
  {
    this.noteservice.getNote().subscribe(noteData=>
      this.noteList=noteData
    ,
    err=>
      console.log(err)
    )
  }

  takeNote(noteForm:NgForm)
  {
    if(noteForm.valid)
    {    
      console.log(this.note.title);
      console.log(this.note.text);
      this.noteList.push(this.note);    
    // console.log(this.noteList);
      this.noteservice.addNote(this.note).subscribe(data=>{},err=>{});
      this.note = new Note();
    }
    else
    {
      alert("Please enter the data in the form properly !!!")
      this.note = new Note();
    }
  }
}
