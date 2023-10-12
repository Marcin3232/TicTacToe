import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummarizeDialogComponent } from './summarize-dialog.component';

describe('SummarizeDialogComponent', () => {
  let component: SummarizeDialogComponent;
  let fixture: ComponentFixture<SummarizeDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SummarizeDialogComponent]
    });
    fixture = TestBed.createComponent(SummarizeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
