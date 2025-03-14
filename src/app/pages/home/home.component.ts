import { Component } from '@angular/core';
import { IntroTextComponent } from "../../intro-text/intro-text.component";
import { BigCardComponent } from "../../big-card/big-card.component";
import { SmollComponent } from "../../smoll/smoll.component";
import { MenuBarComponent } from "../../menu-bar/menu-bar.component";

@Component({
  selector: 'app-home',
  imports: [IntroTextComponent, BigCardComponent, SmollComponent, MenuBarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
