import { Component } from '@angular/core';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-childac',
  templateUrl: './childac.component.html',
  styleUrls: ['./childac.component.css'],
})
export class ChildacComponent {
  products: any[] = [];
  title = 'Child AC Component ';

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.triggerFunction$.subscribe(() => {
      this.FetchEmp();
    });
    this.productService.sortFunction$.subscribe(() => {
      this.sortData();
    });
  }

  FetchEmp() {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  sortData() {
    this.products.sort((a, b) => b.id - a.id);
    this.productService.setSharedData(this.products);
  }
}
