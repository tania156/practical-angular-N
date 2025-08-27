import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app'; // <<-- ЗМІНІТЬ ТУТ App НА AppComponent

describe('AppComponent', () => { // <<-- ЗМІНІТЬ ТУТ App НА AppComponent
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent], // <<-- ЗМІНІТЬ ТУТ App НА AppComponent
      providers: [provideZonelessChangeDetection()]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent); // <<-- ЗМІНІТЬ ТУТ App НА AppComponent
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent); // <<-- ЗМІНІТЬ ТУТ App НА AppComponent
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, students-app');
  });
});
