import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiConnectionService {

  bookingData: any = [
    {
      bookingId: '1234',
      cliente: 'Formoso',
      fechaDeCreacion: '05/27/2024',
      direccion: 'cra 12',
      precio: '10000000',
    },

    {
      bookingId: '1234',
      cliente: 'Formoso',
      fechaDeCreacion: '05/27/2024',
      direccion: 'cra 12',
      precio: '10000000',
    },

    {
      bookingId: '1234',
      cliente: 'Formoso',
      fechaDeCreacion: '05/27/2024',
      direccion: 'cra 12',
      precio: '10000000',
    },
  ];
  data: any = [];

  constructor(private http: HttpClient) { }

  getAllData(){
    this.http.get("https://jsonplaceholder.typicode.com/posts").subscribe((response)=>{
      this.data = response;
    });
  }



}
