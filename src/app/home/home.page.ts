import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

import { DeviceOrientation, DeviceOrientationCompassHeading } from '@ionic-native/device-orientation/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public subscription: Subscription;

  constructor(
    private deviceOrientation: DeviceOrientation
  ) {
    this.subscription = null;
  }

  public watchHeading() {
    // Watch the device compass heading change
    this.subscription = this.deviceOrientation.watchHeading()
      .subscribe(
        (data: DeviceOrientationCompassHeading) => {
          console.log(data);
        }
      );
  }

  public stopWatchHeading() {
    // Stop watching heading change
    if (this.subscription && !this.subscription.closed) {
      this.subscription.unsubscribe();
    }
  }

}
