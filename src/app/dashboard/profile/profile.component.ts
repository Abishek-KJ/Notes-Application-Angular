import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  userName: string = 'Guest User';
  email: string = 'guest@notesapp.com';
  joinedDate: string = new Date().toLocaleDateString();
}
