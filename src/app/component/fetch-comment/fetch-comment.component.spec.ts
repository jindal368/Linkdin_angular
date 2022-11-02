import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchCommentComponent } from './fetch-comment.component';

describe('FetchCommentComponent', () => {
  let component: FetchCommentComponent;
  let fixture: ComponentFixture<FetchCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FetchCommentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FetchCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
