import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Destroy } from './destroy';

describe('Destroy', () => {
  let component: Destroy;
  let fixture: ComponentFixture<Destroy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Destroy]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Destroy);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
