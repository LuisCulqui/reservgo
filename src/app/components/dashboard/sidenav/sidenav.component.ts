import { CommonModule } from '@angular/common';
import { Component, Input, computed, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';

export type MenuItem = {
  icon: string;
  label: string;
  route: string;
}

export type SubMenuItem = {
  //icon: string;
  label: string;
  route: string;
}

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    RouterModule
  ],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {

  activeColor = 'black'; // Color cuando el ícono está activo
  inactiveColor = 'gray'; // Color cuando el ícono está inactivo

  sideNavCollapsed = signal(false);
  @Input() set collapsed(val : boolean) {
    this.sideNavCollapsed.set(val);
  }

  menuItems = signal<MenuItem[]>([
    {
      icon: 'dashboard',
      label: 'Dashboard',
      route: 'dashboard'
    },
    {
      icon: 'dashboard',
      label: 'Dashboard',
      route: 'users'
    },
    {
      icon: 'home',
      label: 'Home',
      route: 'home'
    },
    {
      icon: 'settings',
      label: 'Settings',
      route: '-'
    }
  ]);



  profilePicSize = computed(() => this.sideNavCollapsed() ? '32' : '100');


}
