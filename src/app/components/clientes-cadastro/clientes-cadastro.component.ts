import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ClientesService } from 'src/app/services/clientes.service';
import { CpfValidator } from 'src/app/validators/cpf-validator';

@Component({
  selector: 'app-clientes-cadastro',
  templateUrl: './clientes-cadastro.component.html',
  styleUrls: ['./clientes-cadastro.component.css']
})
export class ClientesCadastroComponent implements OnInit {

  mensagem: string = '';

  constructor(
    private clientesService: ClientesService
  ) { }

  formCadastro = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    cpf: new FormControl('', [Validators.required, CpfValidator.ValidaCpf]),
  });

  get form(): any {
    return this.formCadastro.controls;
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.clientesService.postClientes(this.formCadastro.value)
      .subscribe(
        (res) => {
          this.mensagem = `Cliente '${res.nome}', cadastrado com sucesso.`;
          this.formCadastro.reset();
        }
      )
  }
}
