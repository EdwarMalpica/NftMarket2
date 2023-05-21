import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConexionService } from 'src/app/services/conexion.service';

@Component({
  selector: 'app-mint-nft',
  templateUrl: './mint-nft.component.html',
  styleUrls: ['./mint-nft.component.css']
})
export class MintNftComponent {

  constructor(private route:Router,
    private conexion:ConexionService){

  }


  mintNft(){
    this.conexion.mintNft();
  }
}
