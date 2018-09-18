import { Component, OnInit, ViewChild} from '@angular/core';
import { User } from 'src/app/core/reactiveform/user';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})

export class TemplateformComponent implements OnInit {

  constructor() { }
  user: User = {
    firstName: 'New',
    lastName: 'User',
    role: 'Guest',
    notes: undefined
  };

  roles: Array<string> = [
    'Guest',
    'Admin',
    'Owner',
    'Operator'
  ];

  @ViewChild('userForm') userForm: FormGroup;

  ngOnInit() {
  }
  logForm() {
    console.log(this.userForm);
  }

  logFormValue() {
    console.log(this.userForm.value);
  }

  disableForm() {
    this.userForm.disable();
  }

  enableForm() {
    this.userForm.enable();
  }
}
