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
          path: 'cadastro-atleta',
          loadChildren: () =>
            import('./pages/atleta/cadastro-atleta/cadastro-atleta.module').then(
              (m) => m.CadastroAtletaPageModule
          ),
      },
      {
        path: 'perfil',
        loadChildren: () =>
          import('./pages/perfil/perfil.module').then((m) => m.PerfilModule),
      },
      {
        path: 'list-atleta',
        loadChildren: () =>
          import('./pages/atleta/list-atleta/list-atleta.module').then(
            (m) => m.ListatletaPageModule
          ),
      },
      {
        path: 'edit-atleta',
        loadChildren: () =>
          import('./pages/atleta/edit-atleta/edit-atleta.module').then(
            (m) => m.EditarAtletaPageModule
          ),
        },
        {
          path: 'view-news',
          loadChildren: () => import('./pages/noticias/view-news/view-news.module').then( m => m.ViewNewsPageModule)
        },
        {
          path: 'edit-news',
          loadChildren: () => import('./pages/noticias/edit-news/edit-news.module').then( m => m.EditNewsPageModule)
        },
      {
        path: 'excluir-atleta',
        loadChildren: () =>
          import('./pages/atleta/excluir-atleta/excluir-atleta.module').then(
            (m) => m.ExcluiratletaPageModule
          ),
      },
      {path: 'excluir-treinos',
        loadChildren: () =>
          import('./pages/treino/excluir-treino/excluir-treino.module').then(
            (m) => m.ExcluirTreinoModule
          ),
      }
    ],
  },
  {
    path: 'new-password',
    loadChildren: () => import('./pages/login/new-password/new-password.module').then( m => m.NewPasswordPageModule)
  }

];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
