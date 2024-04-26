import { Component } from "@angular/core";
import { TopMenuComponent } from "./top-menu/top-menu.component";
import { MainMenuComponent } from "./main-menu/main-menu.component";

@Component({
    standalone: true,
    selector: 'app-header',
    templateUrl: './header.component.html',
    imports: [TopMenuComponent, MainMenuComponent],
    // template: '<h3>eKart</h3>',
    styleUrl: './header.component.css'
})
export class HeaderComponent {

}