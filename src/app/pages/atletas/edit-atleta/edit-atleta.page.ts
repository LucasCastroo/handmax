import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { AtletaService } from 'src/app/services/atleta.service';

@Component({
  selector: 'app-edit-atleta',
  templateUrl: './edit-atleta.page.html',
  styleUrls: ['./edit-atleta.page.scss'],
})
export class EditAtletaPage implements OnInit {
  atletaForm!: FormGroup;
  atletaId!: number;

  constructor(
    private fb: FormBuilder,
    private atletaService: AtletaService,
    private modalController: ModalController,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    this.loadAtleta();
  }

  private initializeForm(): void {
    this.atletaForm = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      cpf: ['', [Validators.required]],
      dataNascimento: ['', [Validators.required]],
      sexo: ['', [Validators.required]],
      telefone: [''],
      endereco: this.fb.group({
        CEP: [''],
        logradouro: [''],
        numeroLote: [''],
        complemento: [''],
        localidade: [''],
        UF: [''],
      }),
      dadosSociais: this.fb.group({
        rendaFamiliar: [''],
        pessoasEmCasa: [0, [Validators.min(0)]],
        condicoesMoradia: [''],
        cadastroNIS: [false],
      }),
    });
  }

  private loadAtleta(): void {
    if (this.atletaId) {
      this.atletaService.findById(this.atletaId).subscribe({
        next: (atleta) => this.atletaForm.patchValue(atleta),
        error: (err) => console.error('Erro ao carregar atleta:', err),
      });
    }
  }

  salvarAtleta(): void {
    if (this.atletaForm.valid) {
      this.atletaService.update(this.atletaForm.value, this.atletaId,).subscribe({
        next: () => {
          alert('Atleta atualizado com sucesso!');
          this.fecharModal();
        },
        error: (err) => console.error('Erro ao atualizar atleta:', err),
      });
    } else {
      alert('Preencha todos os campos obrigatórios corretamente!');
    }
  }

  fecharModal(): void {
    this.modalController.dismiss();
  }
}
