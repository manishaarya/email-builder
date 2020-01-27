import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VmwareTemplateComponent } from './vmware-template.component';

describe('VmwareTemplateComponent', () => {
  let component: VmwareTemplateComponent;
  let fixture: ComponentFixture<VmwareTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VmwareTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VmwareTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
