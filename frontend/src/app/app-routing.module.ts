import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {LayoutComponent} from "./components/layout/layout.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'forgot-password',
    loadChildren: () =>
      import('./pages/login/forgot-password/forgot-password.module').then(
        (m) => m.ForgotPasswordModule
      ),
  },
  {
    path: 'new-password',
    loadChildren: () =>
      import('./pages/login/new-password/new-password.module').then(
        (m) => m.NewPasswordPageModule
      ),
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'atletas',
        loadChildren: () => import('./pages/atletas/atletas.module').then( m => m.AtletasPageModule)
      },
      {
        path: 'frequencia',
        loadChildren: () => import('./pages/frequencia/frequencia.module').then( m => m.FrequenciaPageModule)
      },    
      {
        path: 'treino',
        loadChildren: () => import('./pages/treino/treino.module').then( m => m.TreinoPageModule)
      },
      {
        path: 'home',
        loadChildren: () =>
          import('./pages/home/home.module').then((m) => m.HomePageModule),
      },
      {
        path: 'noticias',
        loadChildren: () =>
          import('./pages/noticias/noticias-routing.module').then(
            (m) => m. NoticiasPageRoutingModule
          ),
        },
    
      {
        path: 'perfil',
        loadChildren: () =>
          import('./pages/perfil/perfil.module').then((m) => m.PerfilModule),
      },
    ],
  },
  {
    path: 'new-password',
    loadChildren: () => import('./pages/login/new-password/new-password.module').then( m => m.NewPasswordPageModule)
  },
  {
    path: 'completar-cadastro/:token',
    loadChildren: () => import('./pages/completar-cadastro/completar-cadastro.module').then( m => m.CompletarCadastroPageModule)
  },
  {
    path: 'noticias',
    loadChildren: () => import('./pages/noticias/noticias.module').then( m => m.NoticiasPageModule)
  },


];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
