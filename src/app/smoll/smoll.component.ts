import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-smoll',
  imports: [],
  templateUrl: './smoll.component.html',
  styleUrl: './smoll.component.css'
})
export class SmollComponent implements OnInit{
  @Input()
  photCover:string= ""
  @Input()
  cardTitle:string = ""

  constructor(){

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
