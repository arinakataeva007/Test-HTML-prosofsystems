import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-main-navigation',
  templateUrl: './main-navigation.component.html',
  styleUrl: './styles/main-navigation.component.scss'
})
export class MainNavigationComponent implements OnInit{
    protected namePage!: string;
    private _nextRoute!: string;
    private _previousRoute!: string;
    protected isActive:boolean = false;
    protected activeName!: string;

    constructor(private route: ActivatedRoute, private router: Router) {}

    public ngOnInit(): void {
        this.route.url.subscribe(segments => {
        this.updateNavigation(segments.join('/'));
        });
    }

    protected updateNavigation(currentRoute: string) {
        switch (currentRoute) {
        case 'administration':
            this.namePage = 'Administrator EN (User)';
            this._nextRoute = '';
            this._previousRoute = '/users';
            break;
        case 'users':
            this.namePage = 'Users';
            this._nextRoute = '/administration';
            this._previousRoute = '/usersAndSettings';
            break;
        case 'usersAndSettings':
            this.namePage = 'Users And Settings';
            this._nextRoute = '/users';
            this._previousRoute = '/default';
            break;
        default:
            this.namePage = 'Home';
            this._nextRoute = '/usersAndSettings';
            this._previousRoute = '/default';
            break;
        }
    }
    protected checkHover(event: MouseEvent) {
        this.isActive = true;
        const innerTarget = event.target as HTMLElement;
        if (innerTarget.tagName === 'A') {
            this.activeName = innerTarget.innerText;
        }
    }
    
    protected resetNavigation() {
        this.isActive = false;
        this.activeName = '';
    }    
    
    protected goToNextPage() {
        this.router.navigate([this._nextRoute]);
    }

    protected goToPrevPage() {
        this.router.navigate([this._previousRoute]);
    }

    protected closePage(){
        const message = confirm('Закрыть страницу?');
        alert(message);
    }
}