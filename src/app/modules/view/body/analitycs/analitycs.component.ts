import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import * as bootstrap from 'bootstrap';
import { ConexionService } from 'src/app/services/conexion.service';
@Component({
  selector: 'app-analitycs',
  templateUrl: './analitycs.component.html',
  styleUrls: ['./analitycs.component.css'],
})
export class AnalitycsComponent implements AfterViewInit {
  nftsN: any;
  myCarouselElement = document.querySelector('#myCarousel');
  balance: any;
  transactions: any[];
  volumen: any;
  volumenHour: any;
  nftsByOwner:any [];
  @ViewChild('carouselAnalitycs', { static: false })
  myCarouselElementRef: ElementRef;

  constructor(private conexionService: ConexionService) {
    this.getMintNfts();
    this.getBalance();
    this.getTransactionsContract();
    this.getOwnersForCollection();
  }
  ngAfterViewInit(): void {
    const carouse = new bootstrap.Carousel(
      this.myCarouselElementRef?.nativeElement,
      {
        interval: 2000,
        touch: false,
      }
    );
  }

  getMintNfts = async () => {
    const nfts: any = await this.conexionService
      .getNFTs()
      .then((res) => {
        return res;
      })
      .catch((error) => {
        console.error(error);
      });
    this.nftsN = nfts?.length;
  };

  getBalance = async () => {
    const balance: any = await this.conexionService
      .getBalance()
      .then((res) => {
        return res;
      })
      .catch((error) => {
        console.error(error);
      });
    this.balance = parseInt(balance, 16) / 1000000000000000000;
  };

  getTransactionsContract = async () => {
    const transactions: any = await this.conexionService
      .getTransactionsContract()
      .then((res) => {
        return res;
      })
      .catch((error) => {
        console.error(error);
      });
    this.transactions = transactions;
    this.calVolumen(this.transactions);
    this.calVolumenLastHours(this.transactions);
  };

  calVolumen(transactions: any) {
    const currentTime = new Date();
    const millisecondsInHour = 60 * 60 * 1000;
    const lastHour: any = transactions.filter((tr: any) => {
      const date = new Date(tr.metadata.blockTimestamp);
      const timeDifference = currentTime.getTime() - date.getTime();
      if (timeDifference < millisecondsInHour) return tr;
    });

    let volumen = 0;
    lastHour.map((ts) => {
      volumen += ts.value;
    });
    this.volumen = volumen;
  }

  calVolumenLastHours(transactions: any) {
    const currentTime = new Date();
    const millisecondsInHour = 60 * 60 * 1000;
    const lastSevenHours: { [key: string]: number } = {};

    for (let i = 0; i < 7; i++) {
      const startOfHour = new Date(
        currentTime.getTime() - i * millisecondsInHour
      );
      const endOfHour = new Date(startOfHour.getTime() + millisecondsInHour);

      const volume = transactions
        .filter((tr: any) => {
          const date = new Date(tr.metadata.blockTimestamp);
          return date >= startOfHour && date < endOfHour;
        })
        .reduce((total: number, tr: any) => total + tr.value, 0);
      const hourString = `${startOfHour
        .getHours()
        .toString()
        .padStart(2, '0')}:${startOfHour
        .getMinutes()
        .toString()
        .padStart(2, '0')}`;
      lastSevenHours[hourString] = volume;
    }
    this.volumenHour = lastSevenHours;
  }

  getLengtKeys() {
    return Object.keys(this.volumenHour).length;
  }

  getOwnersForCollection = async () =>{
    const nftsByOwner: any = await this.conexionService
      .getOwnersForCollection()
      .then((res) => {
        return res;
      })
      .catch((error) => {
        console.error(error);
      });
    this.nftsByOwner = nftsByOwner.map(ow =>{
      return{
        address:ow.ownerAddress,
        tokens:ow.tokenBalances.length
      }
    });

    console.log(this.nftsByOwner);

  }

  ngOnInit() {}
}
