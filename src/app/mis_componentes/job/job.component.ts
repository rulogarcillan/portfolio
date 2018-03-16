import { Component, OnInit, Input } from '@angular/core';
import { Timeline } from './timeline';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit {

  private visible = true;
  @Input() timeline: Timeline;

  constructor() { }

  ngOnInit() {
  }


  clickPointer() {
    this.visible = !this.visible;

  }

  isVisible() {
    return this.visible ? 'block' : 'none';
  }

  acordion() {

    if (this.visible) {
      return {
        'max-height': '100%',
        'transition': 'max-height 0.2s ease-out'
      };
    } else {
      return {
        'max-height': '0',
        'overflow': 'hidden',
        'transition': 'max-height 0.3s ease-out'
      };

    }
  }

}
