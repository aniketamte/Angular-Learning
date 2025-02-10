import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: string= "1.Introduction";
  myBtn: string= "My Button";
  counter: number = 0;

  //Attribute Binding
  isDisabled: boolean = true;
  angularImage: string = '../assets/angular.png';

  //Style Binding
  bgColor: string = "green";
  titleColor: string = "white";
  description: string = 'font-size: 30px; color: red';

  //class Binding
  redText: string = 'yes';

  //Event Binding
  incrementCounter() {
    this.counter++;
  }
}
