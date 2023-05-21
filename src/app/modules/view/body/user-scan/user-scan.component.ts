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
      { hash: '0x123602ecae15e5e4f832ff08521e0616aa9bbcb0d8762ff7295ac688ceb15857', method: 'Transfer', date: '2023-05-18 16:06:05', type: 'IN'},
      { hash: '0x123602ecae15e5e4f832ff08521e0616aa9bbcb0d8762ff7295ac688ceb15857', method: 'Transfer', date: '2023-05-18 16:06:05', type: 'OUT'},
      { hash: '0x123602ecae15e5e4f832ff08521e0616aa9bbcb0d8762ff7295ac688ceb15857', method: 'Transfer', date: '2023-05-18 16:06:05', type: 'IN'},{ hash: '0x123602ecae15e5e4f832ff08521e0616aa9bbcb0d8762ff7295ac688ceb15857', method: 'Transfer', date: '2023-05-18 16:06:05', type: 'IN'},
      { hash: '0x123602ecae15e5e4f832ff08521e0616aa9bbcb0d8762ff7295ac688ceb15857', method: 'Transfer', date: '2023-05-18 16:06:05', type: 'OUT'},
      { hash: '0x123602ecae15e5e4f832ff08521e0616aa9bbcb0d8762ff7295ac688ceb15857', method: 'Transfer', date: '2023-05-18 16:06:05', type: 'IN'},
      { hash: '0x123602ecae15e5e4f832ff08521e0616aa9bbcb0d8762ff7295ac688ceb15857', method: 'Transfer', date: '2023-05-18 16:06:05', type: 'IN'},
      { hash: '0x123602ecae15e5e4f832ff08521e0616aa9bbcb0d8762ff7295ac688ceb15857', method: 'Transfer', date: '2023-05-18 16:06:05', type: 'OUT'},
      { hash: '0x123602ecae15e5e4f832ff08521e0616aa9bbcb0d8762ff7295ac688ceb15857', method: 'Transfer', date: '2023-05-18 16:06:05', type: 'IN'},
      { hash: '0x123602ecae15e5e4f832ff08521e0616aa9bbcb0d8762ff7295ac688ceb15857', method: 'Transfer', date: '2023-05-18 16:06:05', type: 'IN'},
      { hash: '0x123602ecae15e5e4f832ff08521e0616aa9bbcb0d8762ff7295ac688ceb15857', method: 'Transfer', date: '2023-05-18 16:06:05', type: 'OUT'},
      { hash: '0x123602ecae15e5e4f832ff08521e0616aa9bbcb0d8762ff7295ac688ceb15857', method: 'Transfer', date: '2023-05-18 16:06:05', type: 'IN'},
      { hash: '0x123602ecae15e5e4f832ff08521e0616aa9bbcb0d8762ff7295ac688ceb15857', method: 'Transfer', date: '2023-05-18 16:06:05', type: 'IN'},
      { hash: '0x123602ecae15e5e4f832ff08521e0616aa9bbcb0d8762ff7295ac688ceb15857', method: 'Transfer', date: '2023-05-18 16:06:05', type: 'OUT'},
      { hash: '0x123602ecae15e5e4f832ff08521e0616aa9bbcb0d8762ff7295ac688ceb15857', method: 'Transfer', date: '2023-05-18 16:06:05', type: 'IN'},
      { hash: '0x123602ecae15e5e4f832ff08521e0616aa9bbcb0d8762ff7295ac688ceb15857', method: 'Transfer', date: '2023-05-18 16:06:05', type: 'IN'},
      { hash: '0x123602ecae15e5e4f832ff08521e0616aa9bbcb0d8762ff7295ac688ceb15857', method: 'Transfer', date: '2023-05-18 16:06:05', type: 'OUT'},
      { hash: '0x123602ecae15e5e4f832ff08521e0616aa9bbcb0d8762ff7295ac688ceb15857', method: 'Transfer', date: '2023-05-18 16:06:05', type: 'IN'},
      { hash: '0x123602ecae15e5e4f832ff08521e0616aa9bbcb0d8762ff7295ac688ceb15857', method: 'Transfer', date: '2023-05-18 16:06:05', type: 'IN'}
   ];

}
}
