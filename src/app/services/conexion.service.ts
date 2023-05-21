import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import Web3 from 'web3';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';
import NFTContract from 'src/assets/contract/NFTContract.json';


declare let window:any;

@Injectable({
  providedIn: 'root',
})
export class ConexionService {
  web3: any;
  get web3Instance() {
    return this.web3;
  }
  chainIds: string[] = ['0x13881'];
  addressUser: any = new BehaviorSubject<string>('');
  loginUser: any = new BehaviorSubject<boolean>(false);
  contractJson = NFTContract;
  contractAddress = "0x495BC48C1A697616EcdB3eac8024424dC4820e16";
  MUMBAI_TESNET_RPC =
    'https://nd-392-709-003.p2pify.com/e239d32099bcb34b42cbd5363cd9986e';
  contract: any;
  metadaPath =
    'https://gateway.pinata.cloud/ipfs/QmT8VK6ApCYM44GRickkAbAqoM32dXKfKyqsTvM1LQBjhb/';

  constructor(private http: HttpClient) {
    if (typeof window.ethereum !== 'undefined') {
      this.web3 = new Web3(window.ethereum);
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No tienes instalado MetaMask!',
      });
    }
  }

  connect() {
    this.handleIdChainChanged();
    this.loadData();
  }
  async handleIdChainChanged() {
    const chainId: string = await window.ethereum.request({
      method: 'eth_chainId',
    });

    if (this.chainIds.includes(chainId)) {
      this.handleAccountsChanged();
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Selecciona la red testnet de Poligon (Mumbai)',
      });
    }
    window.ethereum.on('chainChanged', (res: string) => {
      if (!this.chainIds.includes(res)) {
        this.logout();
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Selecciona la red testnet de Poligon (Mumbai)',
        });
      } else {
        if (this.addressUser.getValue() === '') {
          this.handleAccountsChanged();
        } else {
          this.authBackend();
        }
      }
    });
  }
  async handleAccountsChanged() {
    const accounts: string[] = await window.ethereum.request({
      method: 'eth_requestAccounts',
    });

    this.addressUser.next(accounts[0]);
    this.authBackend();

    window.ethereum.on('accountsChanged', (accounts: string[]) => {
      this.addressUser.next(accounts[0]);
      this.authBackend();
    });
  }

  async authBackend() {
    // => IF Success auth api backend
    this.loginUser.next(true);

    // => IF Failed auth api backend d
    //this.logout();
  }

  logout() {
    this.loginUser.next(false);
  }

  loadData = () => {
    this.web3.eth.Contract.setProvider(this.MUMBAI_TESNET_RPC);
    this.contract = new this.web3.eth.Contract(
      this.contractJson,
      '0x495BC48C1A697616EcdB3eac8024424dC4820e16'
    );
    this.getName();
  };

  mintNft = async () => {

    this.addressUser.subscribe((res: string) => {
      return res;
    });

    const random = Math.floor(Math.random() * 36) + 1;
    const metadata = this.metadaPath +random+".json";

    const data = await this.contract.methods.mintNFT(metadata).encodeABI();
    const nonce = await this.web3.eth.getTransactionCount(
      this.addressUser.getValue()
    );

    const estimateGas = await this.contract.methods
      .mintNFT(metadata)
      .estimateGas({
        from: this.addressUser.getValue(),
        to: this.contractAddress,
        value: this.web3.utils.toHex(this.web3.utils.toWei('100000000', 'gwei')),
        nonce: nonce,
        data: data,
      });

     const params = {
       from: this.addressUser.getValue(),
       to: this.contractAddress,
       gas: this.web3.utils.toHex(estimateGas),
       gasPrice: this.web3.utils.toHex(
         this.web3.utils.toWei('50', 'gwei')
       ),
       value: this.web3.utils.toHex(this.web3.utils.toWei('100000000', 'gwei')),
       data: data,
     };

    console.log(params);


    window.ethereum.request({
      method: "eth_sendTransaction",
      params: [params]
    }).then(res=>{
      return res;
    });

  }


  getName = async () => {
    const response = await this.contract.methods.name().call();
    console.log(response);
  };
}
