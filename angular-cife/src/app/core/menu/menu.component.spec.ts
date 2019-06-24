import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { CoreModule } from '../core.module';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  beforeEach(async(() => {
   TestBed.configureTestingModule({
     imports: [
       RouterTestingModule,
       CoreModule
     ],
     declarations: [
       AppComponent
     ],
   }).compileComponents();
 }));

  beforeEach( () => {
   fixture = TestBed.createComponent(AppComponent);
   // app = fixture.debugElement.componentInstance;
   app = fixture.componentInstance;
 });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
