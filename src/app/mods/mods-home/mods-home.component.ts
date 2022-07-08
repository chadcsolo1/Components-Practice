import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent implements OnInit {

  modalOpen = false;
  items: any = [
    { title: 'Why is Rhea such a cutie pie?', content: 'Rhea is so dang cute because cuteness is in her blood!' },
    { title: 'Is Ldog addorable?', content: 'Yes Ldog happens to be extremely addorable!' },
    { title: 'Why does Butch love Lasagna?', content: 'Well, Butch watched Garfield and that pretty much sums it up!' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.modalOpen = !this.modalOpen;
  }

}
