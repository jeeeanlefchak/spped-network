import { Component } from '@angular/core';
import { SpeedTestService, SpeedTestSettingsModel } from 'ng-speed-test';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public velocityDownload = 0;

  constructor(private speedTestService: SpeedTestService) {
  }

  ngOnInit(): void {
    this.getData();

  }

  private getData() {
    let settings: SpeedTestSettingsModel = {
      iterations: 50,
      retryDelay: 150,
      file: {
        path: 'https://raw.githubusercontent.com/jrquick17/ng-speed-test/02c59e4afde67c35a5ba74014b91d44b33c0b3fe/demo/src/assets/500kb.jpg',
        shouldBustCache: true,
        size: 408949
      }
    };
    this.speedTestService.getMbps().subscribe(
      (speed?: any) => {
        this.velocityDownload = speed;
        console.log('Your speed is ' + speed);
        setTimeout(() => {
          this.getData();
        }, 0);
      }
    ), (err?: any) => {
      debugger
    };
  }
}
