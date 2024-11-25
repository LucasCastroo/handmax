import { Component } from '@angular/core';
import { IonicModule, LoadingController } from '@ionic/angular';
import { Router, RouterModule } from "@angular/router";
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { TransitionScreenComponent } from "../../components/transition-screen/transition-screen.component";
import { NgIf } from "@angular/common";
import { SessionTokenService } from 'src/app/services/session-token.service';


@Component({
  selector: 'app-login',
  imports: [
    IonicModule,
    FormsModule,
    TransitionScreenComponent,
    NgIf,
    RouterModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true
})
export class LoginPage {
  loginForm: FormGroup = this.formBuilder.group({
    login: ['', Validators.required],
    senha: ['', Validators.required]
  });

  showTransitionScreen = false;

  constructor(
    private router: Router,
    private loadingController: LoadingController,
    private formBuilder: FormBuilder,
    private sessionTokenService: SessionTokenService
  ) { }

  // Método para realizar a requisição de login
private async fazerRequisicaoLogin(login: string, senha: string): Promise<any> {
  try {
    return await this.sessionTokenService.authenticateUser(login, senha).toPromise();
  } catch (error) {
    console.error('Erro na requisição de login:', error);
    throw error;
  }
}

// Método principal de login
async login() {
  if (this.loginForm.invalid) {
    console.log('Formulário inválido:', this.loginForm.value);
    return;
  }

  const login = this.loginForm.get('login')?.value;
  const senha = this.loginForm.get('senha')?.value;

  if (!login || !senha) {
    console.log('Campos de login não preenchidos:', { login, senha });
    return;
  }

  const loading = await this.loadingController.create({
    message: 'Entrando...',
    spinner: 'circular',
    duration: 2000,
  });

  await loading.present();

  try {
    const response = await this.fazerRequisicaoLogin(login, senha);
    console.log('Login bem-sucedido:', response);

    // Finaliza o spinner
    await loading.dismiss();

    // Exibe a tela de transição
    this.showTransitionScreen = true;

    // Após a transição, redireciona para a home
    setTimeout(() => {
      this.showTransitionScreen = false;
      this.router.navigateByUrl('/home');
    }, 2000);
  } catch (error) {
    console.error('Erro no login:', error);

    // Finaliza o spinner mesmo em caso de erro
    await loading.dismiss();

    // // Exibe mensagem de erro, se necessário
    // console.log('Mensagem de erro:', error?.message ?? 'Erro desconhecido');
  }
}  
}
