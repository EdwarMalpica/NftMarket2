import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent {
  constructor(private router: Router) { }

  @Input() isConected!: boolean;
  @Output() cambioVariable = new EventEmitter<boolean>();
  
  cambiarValor() {
    console.log("click");
    this.isConected = false?true:true;
    this.cambioVariable.emit(this.isConected);
  }
}
