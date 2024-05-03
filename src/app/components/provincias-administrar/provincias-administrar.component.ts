import { Component, OnInit } from '@angular/core';
import { Provincia } from 'src/app/models/provinciaModel';
import { ProvinciasService } from 'src/app/services/provincias.service';

@Component({
  selector: 'app-provincias-administrar',
  templateUrl: './provincias-administrar.component.html',
  styleUrls: ['./provincias-administrar.component.css']
})

export class ProvinciasAdministrarComponent implements OnInit {

  mostrandoNuevaImagen: boolean = false;
  provincias: Provincia[];
  provinciasTotales: Provincia[]=[];
  id_select: string = "0";
  indice: number = 0;
  nuevo: Provincia = {};
  nuevo_auxiliar: Provincia = {};
  errorProvincia = 0;
  errorCapital = 0;

  constructor(private provinciasService: ProvinciasService) {
    this.provincias = provinciasService.listarProvincias();
    this.provinciasTotales = provinciasService.listarProvinciasTotales();

    console.log("Provincias listar");
    console.log(this.provincias);
  }

  actualizar() {
    console.log("Actualizando una provincia...");
    if (this.indice >= 0 && this.nuevo_auxiliar) {
        // Verificar que ninguno de los campos esté vacío
        if (this.nuevo_auxiliar.nombre !== undefined && this.nuevo_auxiliar.capital !== undefined && this.nuevo_auxiliar.descripcion !== undefined
            && this.nuevo_auxiliar.nombre !== '' && this.nuevo_auxiliar.capital !== '' && this.nuevo_auxiliar.descripcion !== '') {
            // Validar que los campos provincia y capital no contengan números
            if (!this.contieneNumeros(this.nuevo_auxiliar.nombre) && !this.contieneNumeros(this.nuevo_auxiliar.capital) && !this.contieneNumeros(this.nuevo_auxiliar.descripcion)) {
                Object.assign(this.provincias[this.indice], this.nuevo_auxiliar);
                this.provinciasService.guardarProvincias(this.provincias);
                this.provinciasService.guardarProvinciasLocal();
            } else {
                console.error("Los campos de provincia y capital no pueden contener números.");
            }
        } else {
            console.error("No se pueden actualizar los campos con valores vacíos.");
        }
    } else {
        console.error("No se pudo actualizar la provincia.");
    }
  }

  agregar() {
    console.log("Agregando una nueva provincia...");
    if (this.camposValidos(this.nuevo)) {
      this.nuevo.id = (this.provincias.length + 1).toString();
      console.log(this.nuevo);
      this.provincias.push(this.nuevo);
      console.log(this.provincias);
      this.nuevo = {}; // Limpiar la referencia
      this.provinciasService.guardarProvincias(this.provincias);
      this.provinciasService.guardarProvinciasLocal();
    } else {
      console.error("No se pueden agregar campos vacíos o con números.");
    }
  }

  camposValidos(provincia: any): boolean {
    return provincia.nombre !== undefined &&
      provincia.capital !== undefined &&
      provincia.descripcion !== undefined &&
      provincia.nombre.trim() !== '' &&
      provincia.capital.trim() !== '' &&
      provincia.descripcion.trim() !== '' &&
      !/\d/.test(provincia.nombre) &&
      !/\d/.test(provincia.capital) &&
      !/\d/.test(provincia.descripcion);
  }
  rellenarCapital(e : any) {
    const provinciaSeleccionada = e.target.value;
    const provincia = this.provinciasTotales.find(prov => prov.nombre === provinciaSeleccionada);
    if (provincia) {
        this.nuevo.capital = provincia.capital;
    }
  }

  validarCampos(): Boolean {
    console.log("Validando los campos del formulario!!!");
    if ((this.errorProvincia + this.errorCapital) > 0) {
      return false;
    }
    return true;
  }

  seleccionaValor($event: any) {
    console.log("Elige: " + this.id_select);
    for (let i = 0; i < this.provincias.length; i++) {
      if (this.id_select == this.provincias[i].id) {
        this.indice = i;
        break;
      }
    }
    console.log(this.indice);
    console.log(this.nuevo_auxiliar);
    Object.assign(this.nuevo_auxiliar, this.provincias[this.indice]);
  }

  eliminar($event: any) {
    console.log($event.target.value);
    let id: string = $event.target.value; //Guardamos el id del boton
    for (let i = 0; i < this.provincias.length; i++) { //recorremos el array.
      if (this.provincias[i].id == id) {//buscamos coincidencia de id.
        this.provincias.splice(i, 1);//Cuando encuentra, elimina y sale del ciclo.
        break;
      }
    }
    if (this.provincias.length > 0)
      console.log(this.provincias);
    else
      console.log("No hay más provincias");//imprime en consola el objeto resultante
  }

 

  limpiarProvincia() {
    if (this.errorProvincia > 0) {
      console.log("Limpiar provincia");
      this.nuevo.nombre = "";
      this.errorProvincia = 0;
    }
  }

  limpiarCapital() {
    if (this.errorCapital > 0) {
      console.log("Limpiar capital");
      this.nuevo.capital = "";
      this.errorCapital = 0;
    }
  }

  mostrarVistaPrevia(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        //this.provincias[this.indice].imagen = e.target.result;
        this.nuevo_auxiliar.imagen = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  mostrarVistaPreviaNuevo(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.nuevo.imagen = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  private contieneNumeros(cadena: string): boolean {
    return /\d/.test(cadena);
  }
  ngOnInit(): void {
  }
}