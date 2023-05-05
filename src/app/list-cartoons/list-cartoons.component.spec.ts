import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCartoonsComponent } from './list-cartoons.component';

describe('ListCartoonsComponent', () => {
  let component: ListCartoonsComponent;
  let fixture: ComponentFixture<ListCartoonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCartoonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCartoonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
