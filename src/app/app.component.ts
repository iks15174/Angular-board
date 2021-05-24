import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SignService } from "./service/rest-api/sign.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush, 
})
export class AppComponent {
  constructor(
    public signService: SignService
  ){}
}
