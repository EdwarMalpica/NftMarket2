import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConexionService } from 'src/app/services/conexion.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent {

  addressUser= ''
  imageUrl = 'https://as2.ftcdn.net/v2/jpg/02/89/59/55/1000_F_289595573_wCKO1nxxx7HGk69z5szjvSOqPnZVTfTG.jpg';

  constructor(private router: Router, private route: ActivatedRoute, private conexionService: ConexionService) { }

  nfts: any[];
  loading: boolean = true;

  async ngOnInit() {
    this.route.params.subscribe(async params => {
      this.addressUser = params['dato'];
      try {
        this.nfts = await this.conexionService.getNFTs();
        this.loading = false;
        console.log(this.nfts);
        
      } catch (error) {
        console.error('Error al cargar los NFTs', error);
        this.loading = false;
      }
    });
  }


  mostrarNFT(index: any) {
    this.router.navigate(['/nft', index]);
  }
}
