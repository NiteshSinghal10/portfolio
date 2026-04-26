import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactItems = [
    {
      icon: 'fas fa-envelope',
      label: 'Email',
      value: 'niteshsinghal9917@gmail.com',
      href: 'mailto:niteshsinghal9917@gmail.com',
    },
    {
      icon: 'fas fa-phone',
      label: 'Phone',
      value: '+91-9528461322',
      href: 'tel:+919528461322',
    },
    {
      icon: 'fab fa-linkedin-in',
      label: 'LinkedIn',
      value: 'nitesh-s-49ab6b24b',
      href: 'https://www.linkedin.com/in/nitesh-s-49ab6b24b/',
    },
    {
      icon: 'fab fa-github',
      label: 'GitHub',
      value: 'niteshsinghal10',
      href: 'https://github.com/NiteshSinghal10',
    },
    {
      icon: 'fab fa-npm',
      label: 'npm',
      value: 'gitron',
      href: 'https://npmjs.com/package/gitron',
    },
    {
      icon: 'fas fa-map-marker-alt',
      label: 'Location',
      value: 'Modinagar, Uttar Pradesh',
      href: null,
    },
  ];
}
