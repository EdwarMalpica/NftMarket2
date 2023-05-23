import { Component, OnInit } from '@angular/core';
import { ConexionService } from 'src/app/services/conexion.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-user-scan',
  templateUrl: './user-scan.component.html',
  styleUrls: ['./user-scan.component.css'],
})
export class UserScanComponent implements OnInit {
  cols = ["hash","bloque","fecha","asset"];
  products: any;

  constructor(private conexionService: ConexionService) {
    this.loadTransactions();
  }

  ngOnInit() {}

  loadTransactions = async () =>{
    const transactions = await this.conexionService
      .getTransaction()
      .then((resultado) => {
      return resultado;
      })
      .catch((error) => {
        console.error(error);
      });;
    console.log(transactions);
    this.products = transactions;
    this.products.reverse()
  }
}
