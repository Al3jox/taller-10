import { Component, OnInit } from '@angular/core';

import { ApiService } from 'src/app/servicios/api.service';

import { NgxPaginationModule } from 'ngx-pagination';
import {PageEvent} from '@angular/material/paginator';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  datosAPI!: any;

  constructor(public apiService: ApiService) { }

  ngOnInit(): void {
    this.obtenerDatosAPI();
  }

  obtenerDatosAPI(){
    this.apiService.obtenerDatos().subscribe(res => 
      this.datosAPI = res, err => console.log(err))
  }

}
