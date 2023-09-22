import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-videoinput',
  templateUrl: './videoinput.component.html',
  styleUrls: ['./videoinput.component.scss']
})
export class VideoinputComponent {

  videoForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.videoForm = this.fb.group({
      url: ['']
    });
  }


  onSubmit(): void {
    console.log(this.videoForm.value);
  }

}
