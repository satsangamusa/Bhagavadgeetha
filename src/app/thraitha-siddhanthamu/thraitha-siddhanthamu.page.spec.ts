import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ThraithaSiddhanthamuPage } from './thraitha-siddhanthamu.page';

describe('ThraithaSiddhanthamuPage', () => {
  let component: ThraithaSiddhanthamuPage;
  let fixture: ComponentFixture<ThraithaSiddhanthamuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThraithaSiddhanthamuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ThraithaSiddhanthamuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
