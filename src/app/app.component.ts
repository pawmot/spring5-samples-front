import {Component, NgZone} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  time: string;
  private zone = new NgZone({enableLongStackTrace: false});

  constructor() {
    const es = new window['EventSource']('/api/timeSse');
    es.onmessage = ev => this.zone.run(() => this.time = ev.data);
  }
}
