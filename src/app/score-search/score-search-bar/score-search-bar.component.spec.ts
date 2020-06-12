import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreSearchBarComponent } from './score-search-bar.component';

describe('ScoreSearchBarComponent', () => {
  let component: ScoreSearchBarComponent;
  let fixture: ComponentFixture<ScoreSearchBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoreSearchBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
