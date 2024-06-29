import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy, OnInit, computed, signal} from '@angular/core';
import { RouterModule } from '@angular/router';
import {MatListModule, MatNavList} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MatCardModule } from '@angular/material/card';
import { HeaderComponent } from './header/header.component';


@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css',
    imports: [
      CommonModule,
      RouterModule,
      SidenavComponent,
      // PRUEBA
      HeaderComponent,
      MatToolbarModule,
      MatButtonModule,
      MatMenuModule,
      MatIconModule,
      MatSidenavModule,
      MatNavList,
      MatListModule,
      FormsModule,
      MatCardModule
    ]
})
export default class DashboardComponent implements OnInit{

  // isHandset: boolean = false;
  // isSideNavOpen: boolean = true;
  // isExpanded: boolean = false;

  collapsed = signal(false);

  sidenavWidth = computed(() => this.collapsed() ? '65px' : '250px');

  ngOnInit(): void {

  }




}
