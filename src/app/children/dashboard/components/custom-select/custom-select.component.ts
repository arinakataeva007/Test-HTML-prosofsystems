import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
    selector: 'app-custom-select',
    templateUrl: './custom-select.component.html',
    styleUrl: './styles/custom-select.component.scss',
})
export class CustomSelectComponent {
    @ViewChild('select_icon') selectIcon!: ElementRef;

    @Input() value!: string;

    public openList(){
        this.selectIcon.nativeElement.style.transform = 'rotate(180deg)';
    }
    public closeList(){
        this.selectIcon.nativeElement.style.transform = 'rotate(0deg)';
    }
}
