import { Component } from '@angular/core';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-childbc',
  templateUrl: './childbc.component.html',
  styleUrls: ['./childbc.component.css'],
})
export class ChildbcComponent {
  title = 'child bc working';
  receivedData = [];
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.receivedData = this.productService.getSharedData();
    console.log(this.receivedData);
    if (this.receivedData.length > 0) {
      console.log('XXX', (this.title = 'xxx'));
    }
  }
}
