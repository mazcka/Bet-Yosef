import { Component } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [GalleriaModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
  images: any[] | undefined;
    
    responsiveOptions: any[] | undefined;

    constructor() {
      console.timeStamp('GalleryComponent');
    }

    ngOnInit() {
        this.images = [
          'assets/101.jpeg',
          'assets/104.jpeg',
          'assets/103.jpeg',
          'assets/110.jpeg',
          'assets/402.jpeg',
          'assets/404.jpeg',
          'assets/405.jpeg',
          'assets/203.jpeg'
        ];
        this.responsiveOptions = [
            {
                breakpoint: '1024px',
                numVisible: 5
            },
            {
                breakpoint: '768px',
                numVisible: 3
            },
            {
                breakpoint: '560px',
                numVisible: 1
            }
        ];
    }
}
