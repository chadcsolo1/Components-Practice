import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {

  data: any = [
    { name: 'Rhea', age: 5, job: 'Best Fetcher' },
    { name: 'Ldog', age: 7, job: 'Nap Expert' },
    { name: 'Sampson', age: 13, job: 'Wolf Impersinator' }
  ];

  headers: any = [
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
