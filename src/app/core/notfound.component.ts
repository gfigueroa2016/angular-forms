import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-core',
  templateUrl: './notfound.component.html',
  styleUrls: ['./core.component.css']
})
export class NotFoundComponent implements OnInit {

  title = 'Not Found';

  constructor() { }

  ngOnInit() {
  }

}
