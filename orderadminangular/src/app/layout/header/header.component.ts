import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})

export class HeaderComponent {

  constructor(private router: Router) {}

  onOptionChange(event: any) {
    const selectedValue = event.target.value;

    if (selectedValue === '1') {
      this.router.navigate(['']);
    } else if (selectedValue === '2') {
      this.router.navigate(['/Order/catalog']);
    } else if (selectedValue === '3') {
      this.router.navigate(['/Order/shopping-cart']);
    } else if (selectedValue === '4') {
      this.router.navigate(['/Order/order-list']);
    }
  }

  onHomeButtonClick() {
    this.router.navigate(['']);

    const selectElement = document.getElementById('selectOption') as HTMLSelectElement;
    if (selectElement) {
      selectElement.selectedIndex = 0;
    }
  }
}
