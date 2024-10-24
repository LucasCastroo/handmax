import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { EditNewsPage } from './edit-news.page'; 

describe('EditNewsPage', () => {
  let component: EditNewsPage; 
  let fixture: ComponentFixture<EditNewsPage>; 

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EditNewsPage ], 
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditNewsPage); 
    component = fixture.componentInstance; 
    fixture.detectChanges(); 
  }));

  it('should create', () => {
    expect(component).toBeTruthy(); 
  });
});
