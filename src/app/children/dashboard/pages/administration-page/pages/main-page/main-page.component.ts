import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrl: './styles/main-page.component.scss'
})
export class MainPageComponent implements OnInit{
    protected isValid:boolean = false;
    protected formUser: FormGroup = new FormGroup({
        fullName: new FormControl('', Validators.required),
        individual: new FormControl(),
        department: new FormControl(),
    })

    public ngOnInit():void {
        this.formUser.get('fullName')?.valueChanges.subscribe(() => {
            this.updateIconVisibility();
        });
        this.updateIconVisibility();
    }

    updateIconVisibility() {
        if (this.formUser.get('fullName')?.valid) {
            this.isValid = true;
        } else {
            this.isValid = false;
        }
    }
}
