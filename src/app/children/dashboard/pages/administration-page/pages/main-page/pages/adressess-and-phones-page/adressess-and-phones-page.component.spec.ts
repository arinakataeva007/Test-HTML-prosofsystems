import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdressessAndPhonesPageComponent } from './adressess-and-phones-page.component';

describe('AdressessAndPhonesPageComponent', () => {
  let component: AdressessAndPhonesPageComponent;
  let fixture: ComponentFixture<AdressessAndPhonesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdressessAndPhonesPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdressessAndPhonesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
