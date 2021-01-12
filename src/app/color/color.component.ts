import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent {

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  colorName=this.activatedRoute.snapshot.params.color;
  currentValue = "";
  getValue(value: any) {
    this.currentValue = value;
    // this.colorName = this.currentValue;
  }

}
