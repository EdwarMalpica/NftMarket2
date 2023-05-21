import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConexionService } from 'src/app/services/conexion.service';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  showFiller = false;
  addressUserView: boolean = false;
  loginUser: boolean = false;
  addressUser: string = '';
  constructor(private cdr: ChangeDetectorRef, private router: Router, private route: ActivatedRoute,
    private conexion:ConexionService) { }
  
  ngOnInit(): void {
      this.conexion.loginUser.subscribe((res: boolean) => { 
        this.loginUser = res;
        (!this.loginUser) ? this.addressUserView = false : this.addressUserView = true;
        this.cdr.detectChanges();
      });
      
      this.conexion.addressUser.subscribe((res: string) => { 
        this.addressUser = res;
        this.cdr.detectChanges();
      });
  }

  getShortenedAddress(): string {
    const maxLength = 10; // Longitud máxima de la dirección que deseas mostrar
    if (this.addressUser.length > maxLength) {
      // Utiliza el método 'substr' para recortar la dirección a la longitud deseada
      return this.addressUser.substring(0, 5) + '...' + this.addressUser.substring(this.addressUser.length-5, this.addressUser.length);
    }
    return this.addressUser;
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
  mostrarCuenta(){
    this.router.navigate(['/account', this.addressUser]);
  }

  cambiarValor() {
    this.conexion.connect();
    console.log("click");
  }
}
