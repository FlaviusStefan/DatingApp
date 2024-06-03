// learnmore.component.ts
import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-learnmore',
  templateUrl: './learnmore.component.html',
  styleUrls: ['./learnmore.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('1s', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class LearnmoreComponent {
  currentIndex = 0;
  items = [
    "Discover a vibrant community of individuals who share your passions and hobbies. Our app connects you with like-minded people, whether you're into hiking, cooking, reading, or any other activity. Engage in meaningful conversations and form lasting connections.",
    "Be part of exciting events and gatherings organized by our community. From local meetups to virtual hangouts, there's always something happening. Participate in activities that interest you, meet new friends, and expand your social circle through our diverse events.",
    "Share your stories, photos, and experiences with others in the community. Whether you've had an amazing adventure or just a memorable day, our platform lets you post updates and interact with others' content. Inspire and be inspired by the experiences of fellow users.",
    "Keep up with the latest happenings and updates within the community. Our app provides you with real-time notifications and news about upcoming events, new features, and important announcements. Stay informed and never miss out on exciting opportunities."
  ];

  prev() {
    this.currentIndex = (this.currentIndex === 0) ? this.items.length - 1 : this.currentIndex - 1;
  }

  next() {
    this.currentIndex = (this.currentIndex === this.items.length - 1) ? 0 : this.currentIndex + 1;
  }
}
