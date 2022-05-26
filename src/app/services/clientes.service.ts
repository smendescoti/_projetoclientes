import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente.model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  //atributo
  CLIENTES_API: string = `${environment.apiUrl}/clientes`;

  constructor(
    private httpClient: HttpClient
  ) { }

  public postClientes(data: any): Observable<Cliente> {
    return this.httpClient.post<Cliente>(this.CLIENTES_API, data);
  }

  public getClientes(): Observable<Cliente[]> {
    return this.httpClient.get<Cliente[]>(this.CLIENTES_API);
  }

  public getRelatorioClientes(formato: string) {
    return this.httpClient.get(`${this.CLIENTES_API}/${formato}`,
      {
        responseType: 'arraybuffer'
      });
  }
}
