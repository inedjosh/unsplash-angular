import { Component } from '@angular/core';
import { ImagesService } from 'src/app/images.service';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent {

  tabs: any;

  constructor(private image: ImagesService) {}

  ngOnInit() {
    this.image.getJsonData().subscribe(data => {
      this.tabs = data;
    });
  }


}
