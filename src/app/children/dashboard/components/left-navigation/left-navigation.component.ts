import { Component } from '@angular/core';

@Component({
  selector: 'app-left-navigation',
  templateUrl: './left-navigation.component.html',
  styleUrl: './styles/left-navigation.component.scss'
})
export class LeftNavigationComponent {
    protected notificationsIs: boolean = false;
}
