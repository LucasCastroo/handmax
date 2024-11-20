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
      import('./login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'forgot-password',
    loadChildren: () =>
      import('./login/forgot-password/forgot-password.module').then(
        (m) => m.ForgotPasswordModule
      ),
  },
  {
    path: 'new-password',
    loadChildren: () =>
      import('./login/new-password/new-password.module').then(
        (m) => m.NewPasswordPageModule
      ),
  },



  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'treino',
        loadChildren: () => import('./treino/treino.module').then( m => m.TreinoPageModule)
      },
      {
        path: 'marcar-frequencia',
        loadChildren: () => 
          import('./treino/marcar-frequencia/marcar-frequencia.module').then( m => m.MarcarFrequenciaPageModule)
      },
      {
        path: 'home',
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomePageModule),
      },
      {
        path: 'noticias',
        loadChildren: () =>
          import('./noticias/noticias-routing.module').then(
            (m) => m.noticiasPageRoutingModule
          ),
        },


        {
          path: 'cadastro-atleta',
          loadChildren: () =>
            import('./atleta/cadastro-atleta/cadastro-atleta.module').then(
              (m) => m.CadastroAtletaPageModule
          ),
      },
      {
        path: 'perfil',
        loadChildren: () =>
          import('./perfil/perfil.module').then((m) => m.PerfilModule),
      },
      {
        path: 'list-atleta',
        loadChildren: () =>
          import('./atleta/list-atleta/list-atleta.module').then(
            (m) => m.ListatletaPageModule
          ),
      },
      {
        path: 'edit-atleta',
        loadChildren: () =>
          import('./atleta/edit-atleta/edit-atleta.module').then(
            (m) => m.EditarAtletaPageModule
          ),
        },
        {
          path: 'view-news',
          loadChildren: () => import('./noticias/view-news/view-news.module').then( m => m.ViewNewsPageModule)
        },
        {
          path: 'edit-news',
          loadChildren: () => import('./noticias/edit-news/edit-news.module').then( m => m.EditNewsPageModule)
        },
      {
        path: 'excluir-atleta',
        loadChildren: () =>
          import('./atleta/excluir-atleta/excluir-atleta.module').then(
            (m) => m.ExcluiratletaPageModule
          ),
      },
      {path: 'excluir-treinos',
        loadChildren: () =>
          import('./treino/excluir-treino/excluir-treino.module').then(
            (m) => m.ExcluirTreinoModule
          ),
      }
    ],
  },
  {
    path: 'new-password',
    loadChildren: () => import('./login/new-password/new-password.module').then( m => m.NewPasswordPageModule)
  }

];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
