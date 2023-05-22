import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConexionService } from 'src/app/services/conexion.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent {

  addressUser= ''
  imageUrl = 'https://as2.ftcdn.net/v2/jpg/02/89/59/55/1000_F_289595573_wCKO1nxxx7HGk69z5szjvSOqPnZVTfTG.jpg';

  constructor(private route: ActivatedRoute, private conexionService: ConexionService) { }

  nfts: any;
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.addressUser = params['dato'];
      this.loadNFTs();
    });
  }

  async loadNFTs(){
    this.nfts = this.conexionService.getNFTs().then((res) => {console.log(res);
    });

  }
}
