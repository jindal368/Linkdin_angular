import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-icons',
  templateUrl: './header-icons.component.html',
  styleUrls: ['./header-icons.component.scss'],
})
export class HeaderIconsComponent implements OnInit {
  @Input() iconName!: any;
  @Input() title!: string;
  constructor() {}

  ngOnInit(): void {}
}
