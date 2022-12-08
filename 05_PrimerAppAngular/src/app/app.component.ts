import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '05_PrimerAppAngular';



  nombre : string = "Harry Potter";
  edad : number = 18;

 
  public funcion1() {
    this.nombre = "Tony Stark";


    var apellido = "Montana";
    apellido = "Potter";
  }
}
