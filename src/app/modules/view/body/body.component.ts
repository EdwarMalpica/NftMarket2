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

  actualizarVariablePadre(nuevoValor: boolean) {
    this.isConected = nuevoValor;
  }
}
