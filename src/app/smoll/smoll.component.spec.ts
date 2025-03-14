import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmollComponent } from './smoll.component';

describe('SmollComponent', () => {
  let component: SmollComponent;
  let fixture: ComponentFixture<SmollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmollComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
