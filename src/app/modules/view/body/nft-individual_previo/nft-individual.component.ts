import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nft-individual',
  templateUrl: './nft-individual.component.html',
  styleUrls: ['./nft-individual.component.css']
})
export class NftIndividualComponent {
  @Input() nftData: any;

  constructor(private router: Router, private route: ActivatedRoute) { 
    console.log(this.nftData);
  }

  mostrarNFT() {
    this.router.navigate(['/nft']);
  }
}