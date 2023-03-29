import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { Store } from '@ngrx/store'

import { HeaderComponent } from './shared/components/header/header.component'
import { getCurrentUserAction } from './store/auth/actions/getCurrentuser.action'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [HeaderComponent, RouterOutlet],
})
export class AppComponent implements OnInit {
  constructor(private store: Store) {}
  ngOnInit() {
    if (document.cookie) this.store.dispatch(getCurrentUserAction())
  }
}
