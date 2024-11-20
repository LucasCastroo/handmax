import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { AtletaTreinoDTO } from 'src/app/models/AtletaTreinoDTO.model';
import { AtletaService } from 'src/app/services/atleta.service';
import { TreinoService } from 'src/app/services/treino.service';

@Component({
  selector: 'app-edit-treino',
  templateUrl: './edit-treino.page.html',
  styleUrls: ['./edit-treino.page.scss'],
})
export class EditTreinoPage implements OnInit {
  treinoForm: FormGroup;
  atletas: AtletaTreinoDTO[] = [];
  atletasSelecionados: AtletaTreinoDTO[] = [];
  treinoId!: number;

  constructor(
    private fb: FormBuilder,
    private treinoService: TreinoService,
    private atletaService: AtletaService,
    private modalController: ModalController
  ) {
    this.treinoForm = this.fb.group({
      local: ['', Validators.required],
      data: ['', Validators.required],
      horario: ['', Validators.required],
      criarTreinoTodosAtletas: [false],});
   }

  ngOnInit(): void {
    this.carregarTreino();
    this.carregarAtletas();
  }

  carregarTreino() {
    const treinoId = this.treinoId;
  
    this.treinoService.findById(treinoId).subscribe({
      next: (data) => {
        this.treinoForm.patchValue(data);
  
        // Atualizar atletas selecionados com base no treino carregado
        this.atletasSelecionados = data.listarAtletas || [];
        
        // Sincronizar os atletas disponíveis com os selecionados
        this.sincronizarAtletasSelecionados();
      },
      error: (err) => console.error('Erro ao carregar treino:', err),
    });
  }
  
  carregarAtletas() {
    this.atletaService.findAllForTreinos().subscribe({
      next: (data) => {
        this.atletas = data;
  
        // Sincronizar atletas disponíveis com selecionados após o carregamento
        this.sincronizarAtletasSelecionados();
      },
      error: (err) => console.error('Erro ao carregar atletas:', err),
    });
  }
  
  sincronizarAtletasSelecionados() {
    if (this.atletas.length > 0 && this.atletasSelecionados.length > 0) {
      this.atletasSelecionados = this.atletas.filter((atleta) =>
        this.atletasSelecionados.some((selecionado) => selecionado.id === atleta.id)
      );
    }
  }
  

  toggleAtleta(atleta: AtletaTreinoDTO) {
    if (this.isAtletaSelecionado(atleta)) {
      this.atletasSelecionados = this.atletasSelecionados.filter((a) => a.id !== atleta.id);
    } else {
      this.atletasSelecionados.push(atleta);
    }
  }

  isAtletaSelecionado(atleta: AtletaTreinoDTO): boolean {
    return this.atletasSelecionados.some((a) => a.id === atleta.id);
  }

  onSubmit() {
    if (this.treinoForm.valid) {
      const formData = this.treinoForm.value;

      const treinoData = {
        ...formData,
        listarAtletas: formData.criarTreinoTodosAtletas ? [] : this.atletasSelecionados,
      };

      this.treinoService.update(treinoData, this.treinoId).subscribe({
        next: () => alert('Treino atualizado com sucesso!'),
        error: (err) => console.error('Erro ao atualizar treino:', err),
      });
    } else {
      console.error('Formulário inválido.');
    }
  }

  cancel() {
    console.log('Edição cancelada.');
    this.fecharModal();
  }

  fecharModal() {
    this.modalController.dismiss();
  }
}
