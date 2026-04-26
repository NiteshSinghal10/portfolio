import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  stats = [
    { value: '2+', label: 'Years Experience' },
    { value: '6+', label: 'Projects Delivered' },
    { value: '1', label: 'npm Package' },
    { value: '2x', label: 'Award Winner' },
  ];

  highlights = [
    { icon: 'fas fa-server', text: 'Scalable backend systems & microservices' },
    { icon: 'fas fa-robot', text: 'AI-integrated features & MCP servers' },
    { icon: 'fas fa-code-branch', text: 'Open-source contributor (gitron npm)' },
    { icon: 'fas fa-cloud', text: 'AWS cloud deployments & CI/CD pipelines' },
  ];
}
