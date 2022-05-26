import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';
import { Cliente } from 'src/app/models/cliente.model';
import * as fileUtils from '../../utils/file-utils';

@Component({
  selector: 'app-clientes-consulta',
  templateUrl: './clientes-consulta.component.html',
  styleUrls: ['./clientes-consulta.component.css']
})
export class ClientesConsultaComponent implements OnInit {

  clientes = new Array<Cliente>();
  dtOptions: DataTables.Settings = {};

  constructor(
    private clientesService: ClientesService
  ) { }

  ngOnInit(): void {

    this.clientesService.getClientes()
      .subscribe(
        (res) => {
          this.clientes = res;
        }
      );

    this.dtOptions = {
      processing: true,
      lengthMenu: [
        [5, 10, 25, 50, -1],
        [5, 10, 25, 50, 'Todos'],
      ],
      language: {
        url: 'https://cdn.datatables.net/plug-ins/1.11.5/i18n/pt-BR.json'
      }
    }
  }

  obterRelatorio(formato: string) {

    this.clientesService.getRelatorioClientes(formato)
      .subscribe(
        (res) => {
          fileUtils.downloadFile(res, formato, "relatorio_clientes");
        }
      )
  }

}
