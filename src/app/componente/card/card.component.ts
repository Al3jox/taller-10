import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api.service';

import { NgxPaginationModule } from 'ngx-pagination';
import {PageEvent} from '@angular/material/paginator';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  pages: number = 1;
  datosAPI!: any;

  constructor(public apiService: ApiService) { }

  ngOnInit(): void {
    this.obtenerDatosAPI();
  }

  obtenerDatosAPI(){
    this.apiService.obtenerDatos().subscribe(res => 
      this.datosAPI = res, err => console.log(err))
  }

  masInfo(e: any){
    e.target
    Swal.fire(
      "Descripción: " + e,
      "Clic para finalizar",
      "success"
    )
  }

}
