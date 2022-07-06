import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css']
})
export class ViewsHomeComponent implements OnInit {

  stats: any = [
    { value: 22, label: '# of Users' },
    { value: 900, label: 'Revenue' },
    { value: 50, label: 'Reviews' }
  ];

  items: any = [
    {
      image: '/assets/couch.jpeg',
      title: 'Couch',
      description: 'Lay down/ sit on it!'
    },
    {
      image: '/assets/dresser.jpeg',
      title: 'Dresser',
      description: 'Put your clothes in it!'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
