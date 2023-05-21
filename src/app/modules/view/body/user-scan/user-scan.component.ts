import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-scan',
  templateUrl: './user-scan.component.html',
  styleUrls: ['./user-scan.component.css']
})
export class UserScanComponent implements OnInit{

  cols: any[] = [];
  products: any[] = [];
  ngOnInit() {

    this.cols = [
        { field: 'hash', header: 'Hash' },
        { field: 'method', header: 'Metodo' },
        { field: 'date', header: 'Fecha' },
        { field: 'type', header: 'Tipo' }
    ];

    this.products = [
      { hash: '0xc275dc8be39f50d12f66b6a63629c39da5bvxc33', method: 'Transfer', date: '2023-05-18 16:06:05', type: 'IN'},
      { hash: '0xc275dc8be39f50d12f66bdaw3629c39da5ba3456', method: 'Transfer', date: '2023-05-18 16:06:05', type: 'OUT'},
      { hash: '0xc275dc8be39f52343266b6a63629c39da5bae5bd', method: 'Transfer', date: '2023-05-18 16:06:05', type: 'IN'},
      { hash: '0xc275dc8be39f50dwefsdfs32423dfsdf34barfdf', method: 'Transfer', date: '2023-05-18 16:06:05', type: 'IN'}
   ];

}
}
