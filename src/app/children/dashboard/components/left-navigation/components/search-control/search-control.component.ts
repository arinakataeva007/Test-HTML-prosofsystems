import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search-control',
  templateUrl: './search-control.component.html',
  styleUrl: './styles/search-control.component.scss'
})
export class SearchControlComponent {
  @ViewChild('searchInput') searchInput!: ElementRef;

  @HostListener('window:keydown', ['$event']) keyEnterr(event: KeyboardEvent){
    console.log(event.key);
    if(event.key === 'S' && event.shiftKey){
      this.searchInput.nativeElement.focus();
    }
  }

}
