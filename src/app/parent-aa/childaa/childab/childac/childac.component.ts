import { Component } from '@angular/core';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-childac',
  templateUrl: './childac.component.html',
  styleUrls: ['./childac.component.css'],
})
export class ChildacComponent {
  products: any[] = [];
  dummyData = [
    {
      id: 1001,
      imageUrl: 'https://hub.dummyapis.com/Image?text=DS&height=120&width=120',
      firstName: 'Deja',
      lastName: 'Schoen',
      email: 'Deja.Schoen@dummyapis.com',
      contactNumber: '4527597085',
      age: 26,
      dob: '23/01/1997',
      salary: 1.0,
      address: 'Address1',
    },
    {
      id: 1002,
      imageUrl: 'https://hub.dummyapis.com/Image?text=VK&height=120&width=120',
      firstName: 'Verda',
      lastName: 'Krajcik',
      email: 'Verda.Krajcik@dummyapis.com',
      contactNumber: '4503997130',
      age: 28,
      dob: '02/07/1995',
      salary: 2.0,
      address: 'Address2',
    },
    {
      id: 1003,
      imageUrl: 'https://hub.dummyapis.com/Image?text=MN&height=120&width=120',
      firstName: 'Major',
      lastName: 'Nader',
      email: 'Major.Nader@dummyapis.com',
      contactNumber: '4797790153',
      age: 89,
      dob: '06/05/1934',
      salary: 3.0,
      address: 'Address3',
    },
    {
      id: 1004,
      imageUrl: 'https://hub.dummyapis.com/Image?text=PC&height=120&width=120',
      firstName: 'Porter',
      lastName: 'Considine',
      email: 'Porter.Considine@dummyapis.com',
      contactNumber: '4799294202',
      age: 35,
      dob: '19/09/1988',
      salary: 4.0,
      address: 'Address4',
    },
    {
      id: 1005,
      imageUrl: 'https://hub.dummyapis.com/Image?text=AC&height=120&width=120',
      firstName: 'Anna',
      lastName: 'Carter',
      email: 'Anna.Carter@dummyapis.com',
      contactNumber: '4826191040',
      age: 21,
      dob: '13/02/2002',
      salary: 5.0,
      address: 'Address5',
    },
    {
      id: 1006,
      imageUrl: 'https://hub.dummyapis.com/Image?text=YF&height=120&width=120',
      firstName: 'Yolanda',
      lastName: 'Funk',
      email: 'Yolanda.Funk@dummyapis.com',
      contactNumber: '4133097715',
      age: 77,
      dob: '30/08/1946',
      salary: 6.0,
      address: 'Address6',
    },
    {
      id: 1007,
      imageUrl: 'https://hub.dummyapis.com/Image?text=IB&height=120&width=120',
      firstName: 'Ila',
      lastName: 'Bednar',
      email: 'Ila.Bednar@dummyapis.com',
      contactNumber: '4101698750',
      age: 24,
      dob: '06/10/1999',
      salary: 7.0,
      address: 'Address7',
    },
    {
      id: 1008,
      imageUrl: 'https://hub.dummyapis.com/Image?text=JW&height=120&width=120',
      firstName: 'Jairo',
      lastName: 'Wilkinson',
      email: 'Jairo.Wilkinson@dummyapis.com',
      contactNumber: '4298995984',
      age: 74,
      dob: '21/09/1949',
      salary: 8.0,
      address: 'Address8',
    },
    {
      id: 1009,
      imageUrl: 'https://hub.dummyapis.com/Image?text=NF&height=120&width=120',
      firstName: 'Noelia',
      lastName: 'Feest',
      email: 'Noelia.Feest@dummyapis.com',
      contactNumber: '4156999717',
      age: 41,
      dob: '13/11/1982',
      salary: 9.0,
      address: 'Address9',
    },
    {
      id: 1010,
      imageUrl: 'https://hub.dummyapis.com/Image?text=MM&height=120&width=120',
      firstName: 'Marilyne',
      lastName: 'Mosciski',
      email: 'Marilyne.Mosciski@dummyapis.com',
      contactNumber: '4617094164',
      age: 53,
      dob: '09/11/1970',
      salary: 10.0,
      address: 'Address10',
    },
  ];

  title = 'Child AC Component ';

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.triggerFunction$.subscribe(() => {
      this.FetchEmp();
    });
    // if (this.dummyData.length > 0) {
    //   this.sortData();
    // } else {
    //   alert('Data is not available');
    // }
    this.productService.sortFunction$.subscribe(() => {
      this.sortData();
    });
  }

  FetchEmp() {
    this.productService.getProducts().subscribe((data) => {
      // this.products = data.length != 0 ? data : this.dummyData;
      this.products = this.dummyData;
    });
    console.log('not sorted', this.dummyData);
  }

  sortData() {
    this.dummyData.sort((a, b) => b.id - a.id);
    this.productService.setSharedData(this.dummyData);
  }
}
