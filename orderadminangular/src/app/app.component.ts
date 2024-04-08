import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

export class AppComponent {
  title = 'order web angular';

  alertMessage: string = '';
  alertType: string = '';

  showAlert(message: string, type: string) {
    this.alertMessage = message;
    this.alertType = type;
    setTimeout(() => {
      this.closeAlert(); 
    }, 5000); 
  }

  closeAlert() {
    this.alertMessage = '';
    this.alertType = '';
  }
}
