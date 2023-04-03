import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-div',
  templateUrl: './image-div.component.html',
  styleUrls: ['./image-div.component.scss']
})
export class ImageDivComponent {
  @Input() data: any;

   getRowStart(index: number): string {
    return (index % 6 === 0) ? 'span 2' : 'auto';
  }

  getRowEnd(index: number): string {
    return (index % 6 === 0) ? 'span 1' : 'auto';
  }

  getColumnStart(index: number): string {
    const col = (index % 6) + 1;
    return (col === 1 || col === 4) ? '-1' : '2';
  }

  getColumnEnd(index: number): string {
    const col = (index % 6) + 1;
    return (col === 3 || col === 6) ? '-2' : '1';
  }

  ngOnInit() {
    console.log(this.data);
  }

}
