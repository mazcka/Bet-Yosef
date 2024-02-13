import { Component } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';
import { GalleryComponent } from './gallery/gallery.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [GalleriaModule, GalleryComponent],
})
export class AppComponent {
  // title = 'מוסדות בית יוסף';
}
