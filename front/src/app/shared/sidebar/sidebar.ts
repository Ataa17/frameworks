import { Component, signal } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './sidebar.html',
})
export class Sidebar {
  activeMenu = signal<string>('Dashboard');

  menuItems = [
    { label: 'Dashboard', route: '/dashboard', icon: 'dashboard' },
    { label: 'Calendar', route: '/calendar', icon: 'calendar' },
    { label: 'Create Post', route: '/create-post', icon: 'edit' },
    { label: 'Analytics', route: '/analytics', icon: 'chart' },
    { label: 'Settings', route: '/settings', icon: 'settings' },
  ];

  platforms = [
    { name: 'Instagram', color: 'from-pink-500 to-yellow-400' },
    { name: 'Facebook', color: 'bg-blue-600' },
    { name: 'X', color: 'bg-black' },
  ];

  constructor(private router: Router) { } 

  setActive(label: string) {
    this.activeMenu.set(label);
  }

  goToNewPost() {
    this.router.navigate(['/create-post']);
  }
}
