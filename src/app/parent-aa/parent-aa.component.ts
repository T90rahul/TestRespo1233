import { Component } from '@angular/core';
import { ChildaaComponent } from './childaa/childaa.component';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-parent-aa',
  templateUrl: './parent-aa.component.html',
  styleUrls: ['./parent-aa.component.css'],
})
export class ParentAAComponent {
  constructor(private _productService: ProductService) {}

  ngOnInit() {}

  fetchData() {
    this._productService.triggerGreatGrandchildFunction();
  }
}
