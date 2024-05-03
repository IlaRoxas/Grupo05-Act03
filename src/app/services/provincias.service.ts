import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Provincia } from '../models/provinciaModel';


@Injectable({
    providedIn: 'root'
})
export class ProvinciasService {
    API_URI = 'http://localhost:3000/provincia';
    provincias: Provincia[];
    provinciasTotales: Provincia[];

    constructor() { 
        this.provincias = [
          {
              "id": "1",
              "nombre": "Buenos Aires",
              "capital": "La Plata",
              "imagen": "./assets/media/Provincia.png",
              "descripcion": "Buenos Aires es una provincia ubicada en el este de Argentina, conocida por su extensa llanura pampeana, su capital provincial es La Plata."
          },
          {
              "id": "2",
              "nombre": "Catamarca",
              "capital": "San Fernando del Valle de Catamarca",
              "imagen": "./assets/media/Catamarca.png",
              "descripcion": "Catamarca es una provincia situada en el noroeste de Argentina, famosa por sus paisajes montañosos y su riqueza cultural."
          },
          {
              "id": "3",
              "nombre": "Chaco",
              "capital": "Resistencia",
              "imagen": "./assets/media/Chaco.png",
              "descripcion": "Chaco es una provincia en la región noreste de Argentina, conocida por su rica biodiversidad y su cultura indígena."
          },
          {
              "id": "4",
              "nombre": "Chubut",
              "capital": "Rawson",
              "imagen": "./assets/media/Chubut.png",
              "descripcion": "Chubut es una provincia ubicada en la Patagonia argentina, famosa por su costa atlántica y sus paisajes naturales."
          },
          {
              "id": "5",
              "nombre": "Córdoba",
              "capital": "Córdoba",
              "imagen": "./assets/media/Cordoba.png",
              "descripcion": "Córdoba es una provincia en el centro de Argentina, conocida por su arquitectura colonial, su cultura y su sierra."
          },
          {
              "id": "6",
              "nombre": "Corrientes",
              "capital": "Corrientes",
              "imagen": "./assets/media/Corrientes.png",
              "descripcion": "Corrientes es una provincia en la región noreste de Argentina, famosa por sus ríos, sus festivales de música y su cultura guaraní."
          },
          {
              "id": "7",
              "nombre": "Entre Ríos",
              "capital": "Paraná",
              "imagen": "./assets/media/EntreRios.png",
              "descripcion": "Entre Ríos es una provincia en la región mesopotámica de Argentina, conocida por sus playas, sus termas y su agricultura."
          },
          {
              "id": "8",
              "nombre": "Formosa",
              "capital": "Formosa",
              "imagen": "./assets/media/Formosa.png",
              "descripcion": "Formosa es una provincia en la región noreste de Argentina, conocida por sus selvas, sus ríos y su biodiversidad."
          },
          {
              "id": "9",
              "nombre": "Jujuy",
              "capital": "San Salvador de Jujuy",
              "imagen": "./assets/media/Jujuy.png",
              "descripcion": "Jujuy es una provincia en el noroeste de Argentina, famosa por sus paisajes andinos, sus colores y su cultura indígena."
          },
          {
              "id": "10",
              "nombre": "La Pampa",
              "capital": "Santa Rosa",
              "imagen": "./assets/media/LaPampa.png",
              "descripcion": "La Pampa es una provincia en el centro de Argentina, conocida por sus llanuras, su agricultura y su ganadería."
          }
        ];
        this.provinciasTotales = [
          {
              "id": "1",
              "nombre": "Buenos Aires",
              "capital": "La Plata"
          },
          {
              "id": "2",
              "nombre": "Catamarca",
              "capital": "San Fernando del Valle de Catamarca"
          },
          {
              "id": "3",
              "nombre": "Chaco",
              "capital": "Resistencia"
          },
          {
              "id": "4",
              "nombre": "Chubut",
              "capital": "Rawson"
          },
          {
              "id": "5",
              "nombre": "Córdoba",
              "capital": "Córdoba"
          },
          {
              "id": "6",
              "nombre": "Corrientes",
              "capital": "Corrientes"
          },
          {
              "id": "7",
              "nombre": "Entre Ríos",
              "capital": "Paraná"
          },
          {
              "id": "8",
              "nombre": "Formosa",
              "capital": "Formosa"
          },
          {
              "id": "9",
              "nombre": "Jujuy",
              "capital": "San Salvador de Jujuy"
          },
          {
              "id": "10",
              "nombre": "La Pampa",
              "capital": "Santa Rosa"
          },
          {
              "id": "11",
              "nombre": "La Rioja",
              "capital": "La Rioja"
          },
          {
              "id": "12",
              "nombre": "Mendoza",
              "capital": "Mendoza"
          },
          {
              "id": "13",
              "nombre": "Misiones",
              "capital": "Posadas"
          },
          {
              "id": "14",
              "nombre": "Neuquén",
              "capital": "Neuquén"
          },
          {
              "id": "15",
              "nombre": "Río Negro",
              "capital": "Viedma"
          },
          {
              "id": "16",
              "nombre": "Salta",
              "capital": "Salta"
          },
          {
              "id": "17",
              "nombre": "San Juan",
              "capital": "San Juan"
          },
          {
              "id": "18",
              "nombre": "San Luis",
              "capital": "San Luis"
          },
          {
              "id": "19",
              "nombre": "Santa Cruz",
              "capital": "Río Gallegos"
          },
          {
              "id": "20",
              "nombre": "Santa Fe",
              "capital": "Santa Fe"
          },
          {
              "id": "21",
              "nombre": "Santiago del Estero",
              "capital": "Santiago del Estero"
          },
          {
              "id": "22",
              "nombre": "Tierra del Fuego",
              "capital": "Ushuaia"
          },
          {
              "id": "23",
              "nombre": "Tucumán",
              "capital": "San Miguel de Tucumán"
          }
        ];
      }
    listarProvincias() {
        return this.provincias;
    }
    listarProvinciasTotales() {
        return this.provinciasTotales;
    }


    buscarProvincia(id: string) {
    
    }
    guardarProvincias(provinciasGuardar: Provincia[]) {
        this.provincias = provinciasGuardar;
    }
    guardarProvinciasLocal() {
        localStorage.setItem("Provincias", JSON.stringify(this.provincias));
    }

    cargarProvinciasLocal() {
        this.provincias = JSON.parse(localStorage.getItem("Provincias") || '{}');
    }

}
