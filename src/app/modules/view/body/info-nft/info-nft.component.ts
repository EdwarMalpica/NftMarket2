import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConexionService } from 'src/app/services/conexion.service';

@Component({
  selector: 'app-info-nft',
  templateUrl: './info-nft.component.html',
  styleUrls: ['./info-nft.component.css']
})
export class InfoNftComponent {

  index: any;
  nft: any;
  constructor(private router: Router, private route: ActivatedRoute, private conexion: ConexionService) { }

  async ngOnInit() {
    this.route.params.subscribe(async params => {
      this.index = params['dato'];
      try {
        const nfts = await this.conexion.getNFTs();
        this.nft = nfts[this.index];
        console.log(this.nft);
        
      } catch (error) {
        console.error('Error al cargar los NFTs', error);
      }
    });
  }


}
