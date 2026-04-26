import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {
  education = [
    {
      degree: 'Master of Computer Applications (MCA)',
      institution: 'Gurukul Kangri University',
      location: 'Haridwar, Uttarakhand',
      period: '2022 – 2024',
      cgpa: '8.6 / 10',
      icon: 'fas fa-user-graduate',
    },
    {
      degree: 'B.Sc (Computer Science)',
      institution: 'Gurukul Kangri University',
      location: 'Haridwar, Uttarakhand',
      period: '2019 – 2022',
      cgpa: '7.8 / 10',
      icon: 'fas fa-graduation-cap',
    },
  ];
}
