import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ConexionService } from 'src/app/services/conexion.service';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent {
  constructor(private router: Router,
    private conexion:ConexionService) { }

  @Input() isConected!: boolean;
  @Output() cambioVariable = new EventEmitter<boolean>();

  cambiarValor() {
    this.conexion.connect();
    console.log("click");
    this.isConected = false?true:true;
    //this.cambioVariable.emit(this.isConected);
    this.router.navigate(['/home', this.isConected]);
  }
}
