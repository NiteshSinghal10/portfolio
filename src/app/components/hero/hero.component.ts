import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit, OnDestroy {
  roles = ['Software Engineer', 'Backend Developer', 'Node.js Expert', 'Open Source Author'];
  currentRole = '';
  roleIndex = 0;
  charIndex = 0;
  isDeleting = false;
  private timer: ReturnType<typeof setTimeout> | null = null;

  ngOnInit() {
    this.typeRole();
  }

  typeRole() {
    const full = this.roles[this.roleIndex];
    if (this.isDeleting) {
      this.currentRole = full.substring(0, this.charIndex - 1);
      this.charIndex--;
    } else {
      this.currentRole = full.substring(0, this.charIndex + 1);
      this.charIndex++;
    }

    let delay = this.isDeleting ? 60 : 100;

    if (!this.isDeleting && this.charIndex === full.length) {
      delay = 2000;
      this.isDeleting = true;
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.roleIndex = (this.roleIndex + 1) % this.roles.length;
      delay = 400;
    }

    this.timer = setTimeout(() => this.typeRole(), delay);
  }

  ngOnDestroy() {
    if (this.timer) clearTimeout(this.timer);
  }
}
