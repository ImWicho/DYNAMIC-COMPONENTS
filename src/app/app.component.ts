import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { interval } from 'rxjs';
import { BannerOneComponent } from './components/banner-one/banner-one.component';
import { BannerTwoComponent } from './components/banner-two/banner-two.component';
import { DynamicComponentDirective } from './directives/dynamic-component.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild(DynamicComponentDirective, { static: true }) dynamic!: DynamicComponentDirective;
  idx = 0;


  ngAfterViewInit(): void {
    this.generateComponent();
    interval(3000).subscribe(() => this.generateComponent())
  }

  generateComponent():void{

    const viewContainerRef = this.dynamic.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<BannerData>(BANNERS[this.idx].component);
    componentRef.instance.data = BANNERS[this.idx].data

    this.idx = this.idx === 0 ? 1 : 0;
  }
}

export interface BannerData{
  data: any;
}

const BANNERS = [
  {
    data: {
      text: 'Component 1'
    },
    component : BannerOneComponent
  },
  {
    data: {
      text: 'Component 2'
    },
    component : BannerTwoComponent
  }
]
