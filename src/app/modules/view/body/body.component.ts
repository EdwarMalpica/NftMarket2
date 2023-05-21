import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  isConected = false
  showFiller = false;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.isConected = params['dato'];
    });
  }

  actualizarVariablePadre(nuevoValor: boolean) {
    this.isConected = nuevoValor;
  }

  mostrarPresentation() {
    this.router.navigate(['/home']);
  }
  
  mostrarUserScan() {
    this.router.navigate(['/scan']);
  }
  mostrarAnalytics() {
    this.router.navigate(['/analytics']);
  }

}
