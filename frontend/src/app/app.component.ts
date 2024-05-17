import { Component } from '@angular/core';
import { ApiService } from './api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  textInput: string = '';
  labelText: string = '';

  constructor(private apiService: ApiService) { };

  submit() {
    this.apiService.getMessage().subscribe(data => {
      this.labelText = data + " " + this.textInput;
    });
  }
}
