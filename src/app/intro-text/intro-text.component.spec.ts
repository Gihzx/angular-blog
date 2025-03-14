import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroTextComponent } from './intro-text.component';

describe('IntroTextComponent', () => {
  let component: IntroTextComponent;
  let fixture: ComponentFixture<IntroTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntroTextComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntroTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
