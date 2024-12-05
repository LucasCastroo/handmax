import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { AtletaService } from 'src/app/services/atleta.service';
import { CepService } from 'src/app/services/cep.service';
import { ErrorHandlingService } from 'src/app/services/error-handling.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-pre-cadastro',
  templateUrl: './pre-cadastro.page.html',
  styleUrls: ['./pre-cadastro.page.scss'],
})
export class PreCadastroPage implements OnInit {

  atletaForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private athleteService: AtletaService,
    private modalController: ModalController,
    private errorHandlingService: ErrorHandlingService,
    private toastService: ToastService,
  ) {}

  ngOnInit(): void {
    // Inicializando o formulário com a estrutura necessária
    this.atletaForm = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      dataNascimento: ['', [Validators.required]],
      telefone: [''],
      enviarCadastroTelefone: [false]
    });
  }

  cadastrarAtleta(): void {
    console.log(this.atletaForm.value);
    if (this.atletaForm.valid) {
      this.athleteService.createInitial(this.atletaForm.value).subscribe({
        next: () => {
          this.toastService.ativarToast('Atleta cadastrado com sucesso!');
          this.fecharModal();
        },
        error: (err) => {
          const errorMessage = this.errorHandlingService.handleError(err);
          this.toastService.ativarToast(errorMessage);
        }
      });
    } else {
      this.toastService.ativarToast('Preencha todos os campos obrigatórios corretamente!');
    }
  }

  fecharModal(): void {
    this.modalController.dismiss();
  }
}
