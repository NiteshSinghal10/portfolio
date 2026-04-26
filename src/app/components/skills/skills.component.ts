import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skillGroups = [
    {
      category: 'Languages',
      icon: 'fas fa-code',
      skills: [
        { name: 'TypeScript', level: 92 },
        { name: 'JavaScript', level: 90 },
      ],
    },
    {
      category: 'Backend',
      icon: 'fas fa-server',
      skills: [
        { name: 'Node.js', level: 92 },
        { name: 'Express.js', level: 90 },
        { name: 'REST APIs', level: 95 },
        { name: 'Microservices', level: 85 },
        { name: 'WebSockets', level: 80 },
        { name: 'Redis', level: 75 },
      ],
    },
    {
      category: 'Frontend',
      icon: 'fas fa-desktop',
      skills: [
        { name: 'Angular', level: 82 },
        { name: 'React.js', level: 70 },
      ],
    },
    {
      category: 'Databases',
      icon: 'fas fa-database',
      skills: [
        { name: 'MongoDB', level: 90 },
        { name: 'MySQL', level: 75 },
      ],
    },
    {
      category: 'Cloud & DevOps',
      icon: 'fas fa-cloud',
      skills: [
        { name: 'AWS S3', level: 82 },
        { name: 'AWS SES', level: 85 },
        { name: 'CI/CD Pipelines', level: 80 },
        { name: 'Git / GitHub', level: 90 },
        { name: 'EC2 / SQS', level: 75 },
      ],
    },
    {
      category: 'APIs & Integrations',
      icon: 'fas fa-plug',
      skills: [
        { name: 'OpenAI API', level: 85 },
        { name: 'Google Workspace APIs', level: 82 },
        { name: 'WhatsApp API', level: 80 },
        { name: 'Moyasar Payment', level: 85 },
        { name: 'JWT / RBAC', level: 90 },
        { name: 'Claude AI / MCP', level: 80 },
      ],
    },
  ];
}
