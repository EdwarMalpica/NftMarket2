import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent {

  addressUser= ''
  imageUrl = 'https://as2.ftcdn.net/v2/jpg/02/89/59/55/1000_F_289595573_wCKO1nxxx7HGk69z5szjvSOqPnZVTfTG.jpg';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.addressUser = params['dato'];
    });
  }
}
