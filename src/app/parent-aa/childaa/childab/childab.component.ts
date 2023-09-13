import { Component } from '@angular/core';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-childab',
  templateUrl: './childab.component.html',
  styleUrls: ['./childab.component.css'],
})
export class ChildabComponent {
  constructor(private _productService: ProductService) {}
  SortData() {
    this._productService.callSortFunctionGreatGrandchildFunction();
  }
}
