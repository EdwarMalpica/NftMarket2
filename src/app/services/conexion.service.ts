import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import Web3 from 'web3';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';
import NFTContract from 'src/assets/contract/NFTContract.json';
import { Network, Alchemy } from 'alchemy-sdk';
import { resolve } from 'url';

declare let window: any;

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
  contractAddress = '0x495BC48C1A697616EcdB3eac8024424dC4820e16';
  MUMBAI_TESNET_RPC =
    'https://nd-392-709-003.p2pify.com/e239d32099bcb34b42cbd5363cd9986e';
  contract: any;
  metadaPath =
    'https://gateway.pinata.cloud/ipfs/QmT8VK6ApCYM44GRickkAbAqoM32dXKfKyqsTvM1LQBjhb/';
  httpApiAlchemy =
    'https://polygon-mumbai.g.alchemy.com/v2/4aKgl-0gWpWo_BZ2p1ix-zAMjvDuu0Nv';

  settings = {
    apiKey: '46y53Y2nAMh5kR4A0erp2RQSLYRvk7Tt', // Replace with your Alchemy API Key.
    network: Network.MATIC_MUMBAI, // Replace with your network.
  };
  alchemy = new Alchemy(this.settings);

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
    const metadata = this.metadaPath + random + '.json';

    const data = await this.contract.methods.mintNFT(metadata).encodeABI();
    const nonce = await this.web3.eth.getTransactionCount(
      this.addressUser.getValue()
    );

    const estimateGas = await this.contract.methods
      .mintNFT(metadata)
      .estimateGas({
        from: this.addressUser.getValue(),
        to: this.contractAddress,
        value: this.web3.utils.toHex(this.web3.utils.toWei('10000000', 'gwei')),
        nonce: nonce,
        data: data,
      });

    const params = {
      from: this.addressUser.getValue(),
      to: this.contractAddress,
      gas: this.web3.utils.toHex(estimateGas),
      gasPrice: this.web3.utils.toHex(this.web3.utils.toWei('50', 'gwei')),
      value: this.web3.utils.toHex(this.web3.utils.toWei('10000000', 'gwei')),
      data: data,
    };

    window.ethereum
      .request({
        method: 'eth_sendTransaction',
        params: [params],
      })
      .then((res) => {
        return res;
      });
  };
  getName = async () => {
    const response = await this.contract.methods.name().call();
  };

  getNFTs = async () => {
    try {
      const latestBlock = await this.alchemy.nft.getNftsForOwner(
        this.addressUser.getValue()
      );
      const imagenes = [];

      latestBlock.ownedNfts.forEach((element) => {
        if (element.rawMetadata.image != null) {
          imagenes.push({
            name: element.rawMetadata.name,
            description: element.description,
            image: element.rawMetadata.image,
            atributtes: element.rawMetadata.attributes,
          });
        }
      });

      return imagenes;
    } catch (error) {
      console.error('Error al cargar los NFTs', error);
      return [];
    }
  };
  getTransaction = async () => {
    const toAddress = this.addressUser.getValue();
    const options = {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        method: 'alchemy_getAssetTransfers',
        params: [
          {
            toAddress: toAddress,
            category: ['external', 'erc721', 'erc20', 'erc1155', 'specialnft'],
            withMetadata: true,
            excludeZeroValue: true,
          },
        ],
      }),
    };
    return new Promise((resolve, reject) => {
      fetch(this.httpApiAlchemy, options)
        .then((response) => response.json())
        .then((data) => {
          resolve(data.result?.transfers);
        })
        .catch((err) => reject(err));
    });
  };

  getMintNfts() {
    const options = { method: 'GET', headers: { accept: 'application/json' } };

    return new Promise((resolve, reject) => {
      fetch(
        'https://eth-mainnet.g.alchemy.com/nft/v2/46y53Y2nAMh5kR4A0erp2RQSLYRvk7Tt/getNFTsForCollection?contractAddress=0x495BC48C1A697616EcdB3eac8024424dC4820e16&withMetadata=false',
        options
      )
        .then((response) => response.json())
        .then((response) => {
          resolve(response.result);
        })
        .catch((err) => reject(err));
    });
  }

  getBalance() {
    const options = {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        id: 1,
        jsonrpc: '2.0',
        params: [this.contractAddress, 'latest'],
        method: 'eth_getBalance',
      }),
    };
    return new Promise((resolve, reject) => {
      fetch(this.httpApiAlchemy, options)
        .then((response) => response.json())
        .then((response) => {
          resolve(response.result);
        })
        .catch((err) => reject(err));
    });
  }

  getTransactionsContract = async () => {
    const options = {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        method: 'alchemy_getAssetTransfers',
        params: [
          {
            toAddress: this.contractAddress,
            category: ['external'],
            withMetadata: true,
            excludeZeroValue: true,
          },
        ],
      }),
    };

    return new Promise((resolve, reject) => {
      fetch(this.httpApiAlchemy, options)
        .then((response) => response.json())
        .then((data) => {
          resolve(data.result?.transfers);
        })
        .catch((err) => reject(err));
    });
  };


  getOwnersForCollection(){
    const options = { method: 'GET', headers: { accept: 'application/json' } };
    return new Promise((resolve,reject)=>{
      fetch('https://polygon-mumbai.g.alchemy.com/nft/v2/46y53Y2nAMh5kR4A0erp2RQSLYRvk7Tt/getOwnersForCollection?contractAddress=0x495BC48C1A697616EcdB3eac8024424dC4820e16&withTokenBalances=true',
        options
      )
        .then((response) => response.json())
        .then((response) =>{
          resolve(response.ownerAddresses);
        })
        .catch((err) => reject(err));
    } )
  }
}
