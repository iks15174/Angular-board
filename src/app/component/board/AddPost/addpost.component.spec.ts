import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AddpostComponent } from './addpost.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from "../../../modules/meterial/meterial.module";


describe('AddpostComponent', () => {
  let fixture: ComponentFixture<AddpostComponent>;
  let app: AddpostComponent
  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [
        AddpostComponent
      ],
      imports: [
        ReactiveFormsModule, 
        RouterTestingModule, 
        BrowserAnimationsModule, 
        MatFormFieldModule, 
        MatInputModule,
        MaterialModule
      ],
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(AddpostComponent);
    app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  })

  it('should create the app', async(() => {
    expect(app).toBeTruthy();
  }));

  it('should have title 글쓰기', async(() => {
    const elem: HTMLElement = fixture.nativeElement;
    const text = elem.querySelector('mat-card-title');
    expect(text?.textContent).toEqual('글쓰기')
  }));

  it('title & content should have more than one letter', async(() => {
    const titleInput = app.postForm.controls.title;
    const contentInput = app.postForm.controls.content;

    expect(titleInput.valid).toBeFalsy();
    expect(contentInput.valid).toBeFalsy();

    titleInput.setValue('title');
    contentInput.setValue('content');

    expect(titleInput.valid).toBeTruthy();
    expect(contentInput.valid).toBeTruthy();
  }));

  it('title & content error message should show', (() => {
    const elem: HTMLElement = fixture.nativeElement;
    const titleInputEle: HTMLInputElement = elem.querySelector('input') as HTMLInputElement;
    const cotentInputEle: HTMLTextAreaElement = elem.querySelector('textarea') as HTMLTextAreaElement;
    const titleInput = app.postForm.controls.title;
    const contentInput = app.postForm.controls.content;
    let focusedEle;

    titleInput.setValue('');
    contentInput.setValue('');
    fixture.detectChanges()

    titleInputEle.focus();
    fixture.detectChanges();
    // focusedEle = elem.querySelector(':focus');
    // expect(focusedEle).toEqual(titleInputEle);


    titleInputEle.blur();
    fixture.detectChanges();

    cotentInputEle.focus();
    fixture.detectChanges();
    // focusedEle = elem.querySelector(':focus');
    // expect(focusedEle).toEqual(cotentInputEle);

    cotentInputEle.blur();
    fixture.detectChanges();


    const titleError: HTMLParagraphElement = elem.querySelector('#title-error') as HTMLParagraphElement;
    const contentError: HTMLParagraphElement = elem.querySelector('#content-error') as HTMLParagraphElement;
    
    expect(titleError.textContent).toEqual('Title is required');
    expect(contentError.textContent).toEqual('Contents is required');
  }));
});
