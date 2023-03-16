import { Component } from '@angular/core'
import { ModalWindowsComponent } from '../../../module/auth/modal/components/modal-windows/modal-windows.component'

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  standalone: true,
  imports: [ModalWindowsComponent],
})
export class MainPageComponent {}
