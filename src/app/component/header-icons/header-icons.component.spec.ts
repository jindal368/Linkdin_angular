import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderIconsComponent } from './header-icons.component';

describe('HeaderIconsComponent', () => {
  let component: HeaderIconsComponent;
  let fixture: ComponentFixture<HeaderIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderIconsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
