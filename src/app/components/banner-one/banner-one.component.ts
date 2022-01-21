import { Component, Input, OnInit } from '@angular/core';
import { BannerData } from 'src/app/app.component';

@Component({
  selector: 'app-banner-one',
  templateUrl: './banner-one.component.html',
  styleUrls: ['./banner-one.component.scss']
})
export class BannerOneComponent implements BannerData  {
  @Input() data: any;
  constructor() { }


  
}
