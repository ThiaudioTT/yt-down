import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { YtServiceService } from 'src/app/service/yt-service.service';

@Component({
  selector: 'app-videoinput',
  templateUrl: './videoinput.component.html',
  styleUrls: ['./videoinput.component.scss']
})
export class VideoinputComponent {

  videoForm: FormGroup;

  constructor(private fb: FormBuilder, private ytService: YtServiceService) {
    this.videoForm = this.fb.group({
      url: ['']
    });
  }


  onSubmit(): void {
    console.log(this.videoForm.value);

    this.ytService.getVideo(this.videoForm.value.url).subscribe((data) => {
      console.log(data);

      // Assuming data is a Blob and you want to specify the file name
      const blob = data;
      const fileName = 'video.mp4'; // Replace with the desired file name

      const url = URL.createObjectURL(blob);
      const anchor = document.createElement('a');
      anchor.href = url;
      anchor.download = fileName;
      anchor.click();
      URL.revokeObjectURL(url);
    });
  }

}
