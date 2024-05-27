import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ApiConnectionService } from 'src/app/service/api-connection.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  data: any = [];
  bookingData: any = [];

  constructor(private apiService: ApiConnectionService){
  }

  ngOnInit(){
    this.bookingData = this.apiService.bookingData
  }

  show(){
    this.data = this.apiService.data;
    console.log(this.data)
  }

  
}
