import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Gitron',
      subtitle: 'Open Source npm Package',
      description: 'AI-powered CLI tool that performs automated code reviews on GitHub and GitLab pull/merge requests. Generates context-aware inline suggestions using OpenAI API, streamlining developer workflows and CI/CD pipelines.',
      tech: ['TypeScript', 'Node.js', 'OpenAI API', 'GitHub API', 'GitLab API'],
      icon: 'fas fa-code-branch',
      type: 'Open Source',
      period: '2024 – Present',
      highlight: true,
      links: [{ label: 'npm', icon: 'fab fa-npm', url: 'https://npmjs.com/package/gitron' }],
    },
    {
      title: 'BotPenguin',
      subtitle: 'SaaS Chatbot Platform',
      description: 'Maintained and enhanced a SaaS chatbot platform serving 10,000+ clients with automated customer support. Integrated Google Sheets and Google Drive APIs boosting data management speed by 25%.',
      tech: ['TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'Google APIs'],
      icon: 'fas fa-robot',
      type: 'Product',
      period: 'May 2025 – Present',
      highlight: false,
      links: [],
    },
    {
      title: 'Project Management Tool',
      subtitle: 'Zoho/Notion-style PM System',
      description: 'Full-scale project management tool with microservices backend (5 services: Gateway, Auth, PM, Notification, Upload). Features JWT + RBAC auth and AWS S3 for file management.',
      tech: ['TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'Angular', 'AWS S3'],
      icon: 'fas fa-tasks',
      type: 'Client Project',
      period: 'Nov 2024 – May 2025',
      highlight: false,
      links: [],
    },
    {
      title: 'Tasame',
      subtitle: 'Doctor Management System',
      description: 'Doctor management system for a Saudi client with appointment booking, doctor profiles, and Moyasar payment gateway integration for seamless transactions in the Saudi market.',
      tech: ['TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'Moyasar'],
      icon: 'fas fa-user-md',
      type: 'Client Project',
      period: '2024',
      highlight: false,
      links: [],
    },
    {
      title: 'ATS – Applicant Tracking System',
      subtitle: 'End-to-End Recruitment Platform',
      description: 'Core ATS platform with Claude AI + LinkedIn MCP integration for automated candidate sync. Multi-channel notifications (WhatsApp + Email + In-app) and AWS SES email delivery achieving 99.9% reliability.',
      tech: ['TypeScript', 'Node.js', 'MongoDB', 'AWS SES', 'WhatsApp API', 'Claude AI'],
      icon: 'fas fa-users',
      type: 'Internal Product',
      period: 'Jan 2024 – Nov 2024',
      highlight: false,
      links: [],
    },
    {
      title: 'Queue Management System',
      subtitle: 'Patient Booking Platform',
      description: 'Client project for managing patient booking queues with real-time queue tracking, appointment scheduling, and notification systems to improve healthcare facility efficiency.',
      tech: ['TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'WebSockets'],
      icon: 'fas fa-hospital',
      type: 'Client Project',
      period: '2024',
      highlight: false,
      links: [],
    },
  ];
}
