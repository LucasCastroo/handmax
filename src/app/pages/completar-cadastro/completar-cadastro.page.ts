import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AtletaService } from 'src/app/services/atleta.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-completar-cadastro',
  templateUrl: './completar-cadastro.page.html',
  styleUrls: ['./completar-cadastro.page.scss'],
})
export class CompletarCadastroPage implements OnInit {
  cadastroForm!: FormGroup;
  token!: string;
  isTokenValid: boolean = false; // Para verificar a validade do token
  showError: boolean = false; // Controla a exibição do erro
  isLoading: boolean = true; // Para exibir o estado de carregamento

  constructor(
    private fb: FormBuilder,
    private atletaService: AtletaService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.token = this.route.snapshot.paramMap.get('token') || '';
    this.validarToken();
    this.createForm();
  }

  validarToken() {
    this.atletaService.validarToken(this.token).subscribe({
      next: (isValid) => {
        this.isTokenValid = isValid;
        this.isLoading = false; // Finaliza o estado de carregamento
        this.showError = !isValid; // Exibe o erro apenas se o token for inválido
      },
      error: () => {
        this.isLoading = false;
        this.showError = true; // Exibe erro genérico caso ocorra falha na requisição
      },
    });
  }

  createForm() {
    this.cadastroForm = this.fb.group({
      nome: ['', Validators.required],
      cpf: ['', [Validators.required, Validators.pattern(/^\d{11}$/)]],
      dataNascimento: ['', Validators.required],
      sexo: ['', Validators.required],
      telefone: ['', Validators.required],
      endereco: this.fb.group({
        CEP: ['', Validators.required],
        logradouro: ['', Validators.required],
        numeroLote: ['', Validators.required],
        complemento: [''],
        localidade: ['', Validators.required],
        UF: ['', Validators.required],
      }),
      questionario: this.fb.group({
        rendaFamiliar: [0, [Validators.required, Validators.min(0)]],
        pessoasEmCasa: [0, [Validators.required, Validators.min(1)]],
        condicoesMoradia: ['', Validators.required],
        cadastroNIS: [false, Validators.required],
      }),
    });
  }

  onSubmit() {
    if (this.cadastroForm.valid) {
      this.atletaService.updateCadastroInicial(this.token, this.cadastroForm.value)
        .subscribe({
          next: (res) => {
            console.log('Cadastro completo:', res);
            // Redirecionar ou exibir mensagem de sucesso
          },
          error: (err) => {
            console.error('Erro ao completar cadastro:', err);
            // Exibir mensagem de erro
          },
        });
    }
  }
}
