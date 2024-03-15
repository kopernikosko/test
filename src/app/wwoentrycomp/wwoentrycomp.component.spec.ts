import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WwoentrycompComponent } from './wwoentrycomp.component';

describe('WwoentrycompComponent', () => {
  let component: WwoentrycompComponent;
  let fixture: ComponentFixture<WwoentrycompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WwoentrycompComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WwoentrycompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
