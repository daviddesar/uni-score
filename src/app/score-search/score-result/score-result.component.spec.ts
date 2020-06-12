import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreResultComponent } from './score-result.component';

describe('ScoreResultComponent', () => {
  let component: ScoreResultComponent;
  let fixture: ComponentFixture<ScoreResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoreResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
