import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectSettingComponent } from './project-setting.component';

describe('DashboardComponent', () => {
  let component: ProjectSettingComponent;
  let fixture: ComponentFixture<ProjectSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectSettingComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
