import { Component } from '@angular/core'
import { ModalWindowsComponent } from '../modal-windows/modal-windows.component'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  standalone: true,
  imports: [ModalWindowsComponent],
})
export class HomePageComponent {}
