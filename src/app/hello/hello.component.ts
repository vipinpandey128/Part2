import { Component, OnInit } from '@angular/core';
import { Name } from './models/name';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  name:Name = new Name();
  constructor() { }

  ngOnInit(): void {
  }

}
