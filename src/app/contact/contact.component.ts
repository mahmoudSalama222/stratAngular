import { Component } from '@angular/core';
import { Form } from '../form';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
 formData: Form[] = [
  { labelName: 'userName', type: 'text', },
  { labelName: 'userAge', type: 'text' },
  { labelName: 'userEmail', type: 'email' },
  { labelName: 'userPassword', type: 'password' },
];
}
