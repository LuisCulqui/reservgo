import { CommonModule } from '@angular/common';
import { Component, Input, Pipe, PipeTransform, computed, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';

export type MenuItem = {
  id: number;
  icon: string;  // ICONO
  label: string;  // nombre
  //route: string; // LUEGO BORRAR, YA QUE ESTARA EN SUBMENU
}

export type SubMenuItem = {
  id: number;
  label: string; // nombre
  menuItem : MenuItem;
  route: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    RouterModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  private memorySubMenus: { [menuId: number]: SubMenuItem[] } = {};

  activeSubMenu: number | null = null;

  // Color cuando el ícono está activo
  activeColor = '#cc0000';
  // Color cuando el ícono está inactivo
  inactiveColor = 'rgba(0, 0, 0, 0.4)';

  sideNavCollapsed = signal(false);

  @Input() set collapsed(val : boolean) {
    this.sideNavCollapsed.set(val);
  }

  menuItems = signal<MenuItem[]>([
    {
      id: 1,
      icon: 'dashboard',
      label: 'Dashboard'
    },
    {
      id: 2,
      icon: 'settings',
      label: 'Configuración'
    },
    {
      id: 3,
      icon: 'lock',
      label: 'Seguridad'
    },
    {
      id: 4,
      icon: 'settings_accessibility',
      label: 'Talento'
    },
    {
      id: 5,
      icon: 'arrow_back_ios',
      label: 'Back Officce'
    },
  ]);

  subMenuItems = signal<SubMenuItem[]>([
    {
      id: 1,
      label: 'Dashboard',
      menuItem : {
        id: 1,
        icon: 'dashboard',
        label: 'Dashboard'
      },
      route: 'home',
    },
    {
      id: 2,
      label: 'Area',
      menuItem : {
        id: 2,
        icon: 'settings',
        label: 'Configuración',
      },
      route: 'users',
    },
    {
      id: 3,
      label: 'Cliente',
      menuItem : {
        id: 2,
        icon: 'settings',
        label: 'Configuración',
      },
      route: 'ruta2',
    },
    {
      id: 4,
      label: 'Documento',
      menuItem : {
        id: 2,
        icon: 'settings',
        label: 'Configuración',
      },
      route: 'home',
    }
  ]);

  getSubMenusByMenuId(menuId: number): SubMenuItem[] {
    // Verificar si el resultado para el menuId ya está memorizado
    if (this.memorySubMenus.hasOwnProperty(menuId)) {
      return this.memorySubMenus[menuId];
    }
    // Si no está memoizado, realizar el filtrado y memoizar el resultado
    const subMenus = this.subMenuItems().filter(sub => sub.menuItem.id === menuId);
    this.memorySubMenus[menuId] = subMenus;
    // Loguear el resultado
    console.log("SubMenu del menu : ", menuId, subMenus);
    return subMenus;
  }

  toggleSubMenu(menuId: number): void {
    if (this.activeSubMenu === menuId) {
      // Cierra el submenu si es el mismo que ya está abierto
      this.activeSubMenu = null;
      //this.activeSubMenu = this.activeSubMenu === menuId ? null : menuId;
    } else {
      // Abre el nuevo submenu
      this.activeSubMenu = menuId;
    }
  }

  isSubMenuVisible(menuId: number): boolean {
    return this.activeSubMenu === menuId;
  }

  profilePicSize = computed(() => this.sideNavCollapsed() ? '32' : '100');



}
