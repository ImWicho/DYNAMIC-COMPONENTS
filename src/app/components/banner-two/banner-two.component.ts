import { Component, Input } from '@angular/core';
import { BannerData } from 'src/app/app.component';

@Component({
  selector: 'app-banner-two',
  templateUrl: './banner-two.component.html',
  styleUrls: ['./banner-two.component.scss']
})
export class BannerTwoComponent implements BannerData  {
  @Input() data: any;

  constructor() { }

  

}
