import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConexionService } from 'src/app/services/conexion.service';

@Component({
  selector: 'app-mint-nft',
  templateUrl: './mint-nft.component.html',
  styleUrls: ['./mint-nft.component.css']
})
export class MintNftComponent {

  hash:any;
  constructor(private route:Router,
    private conexion:ConexionService){

  }

  mintNft(){
    this.hash =this.conexion.mintNft();
  }
}
