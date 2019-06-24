import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CoreModule } from '../core.module';
import { MenuComponent } from './menu.component';

describe('MenuComponent', () => {

  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async(() => {
   TestBed.configureTestingModule({
     declarations: [
       MenuComponent
     ]
   }).compileComponents();
 }));

  beforeEach( () => {
   fixture = TestBed.createComponent(MenuComponent);
   // app = fixture.debugElement.componentInstance;
   component = fixture.componentInstance;
 });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });
});
