import { Component } from '@angular/core';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-childbc',
  templateUrl: './childbc.component.html',
  styleUrls: ['./childbc.component.css'],
})
export class ChildbcComponent {
  receivedData: any = [];
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getSharedData().subscribe((data) => {
      this.receivedData = data;
      console.log(this.receivedData);
      if (this.receivedData.length > 0) {
      }
    });
  }
}
