import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBySideDiffComponent } from './side-by-side-diff.component';

describe('SideBySideDiffComponent', () => {
  let component: SideBySideDiffComponent;
  let fixture: ComponentFixture<SideBySideDiffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideBySideDiffComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SideBySideDiffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
