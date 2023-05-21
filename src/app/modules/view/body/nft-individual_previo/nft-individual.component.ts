import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-nft-individual',
  templateUrl: './nft-individual.component.html',
  styleUrls: ['./nft-individual.component.css']
})
export class NftIndividualComponent {

  constructor(private router: Router, private route: ActivatedRoute) { }

  mostrarNFT() {
    this.router.navigate(['/nft']);
  }
}
