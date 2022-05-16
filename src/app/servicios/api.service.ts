import { Injectable } from '@angular/core';
// Http
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  URLAPI = 'https://www.thesportsdb.com/api/v1/json/2/all_sports.php';

  constructor(private http: HttpClient) { }

  obtenerDatos(){
    return this.http.get<any>(this.URLAPI)
    .pipe(map((res: any) =>{
      return res
    }))
  }
}
