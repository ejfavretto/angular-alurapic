import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-photo',
  templateUrl: 'photo.component.html'
})

export class AppPhotoComponent {
  @Input() description = '';
  @Input() url = '';
}
