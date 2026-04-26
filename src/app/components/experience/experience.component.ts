import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  experiences = [
    {
      company: 'Relinns Technologies Pvt Ltd',
      role: 'Software Engineer',
      period: 'Jan 2024 – Present',
      location: 'Mohali, Punjab',
      type: 'Full-time',
      points: [
        'Developed and deployed high-performance RESTful APIs using Node.js and TypeScript with JWT-based authentication, improving system reliability and data protection by 30%.',
        'Integrated Moyasar payment gateway with secure API protocols, achieving 99.9% transaction success rate and full compliance with industry security standards.',
        'Architected scalable, modular backend solutions supporting microservices and event-driven deployments, reducing integration time by 40% and enhancing maintainability.',
        'Built an event-driven notification system leveraging Google Workspace APIs and webhooks for real-time Google Chat alerts, improving response efficiency by 35%.',
        'Implemented AI-driven features including intelligent error detection and automated logging insights, optimizing backend monitoring and system uptime.',
        'Built a Model Context Protocol (MCP) server integrated with Claude AI to fetch candidate data from LinkedIn and automatically sync it with the ATS platform, significantly reducing manual recruitment effort.',
      ],
      tech: ['Node.js', 'TypeScript', 'Express.js', 'MongoDB', 'AWS', 'JWT', 'Redis'],
    },
  ];
}
