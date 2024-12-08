import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AtletaService } from 'src/app/services/atleta.service';
import { ActivatedRoute } from '@angular/router';
import { CepService } from 'src/app/services/cep.service';
import { ToastService } from 'src/app/services/toast.service';

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
    private route: ActivatedRoute,
    private cepService: CepService,
    private toastService: ToastService
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


  buscarCep(): void {
    const cep = this.cadastroForm.get('endereco')?.get('CEP')?.value;
    console.log("CEP digitado: ", cep);

    if (cep) {
      this.cepService.findByStringCep(cep).subscribe({
        next: (data) => {
          if (!data.erro) {
            this.cadastroForm.get('endereco')?.patchValue({
              logradouro: data.logradouro || '',
              localidade: data.localidade || '',
              UF: data.uf || '',
            });

            // Desativar os campos preenchidos automaticamente
            this.cadastroForm.get('endereco')?.get('logradouro')?.disable();
            this.cadastroForm.get('endereco')?.get('localidade')?.disable();
            this.cadastroForm.get('endereco')?.get('UF')?.disable();
          } else {
            this.toastService.ativarToast('CEP não encontrado.');
          }
        },
        error: () => {
          this.toastService.ativarToast('Erro ao buscar o CEP. Verifique o valor e tente novamente.');
        },
      });
    }
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
