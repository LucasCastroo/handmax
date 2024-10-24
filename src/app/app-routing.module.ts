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
      import('./forgot-password/forgot-password.module').then(
        (m) => m.ForgotPasswordModule
      ),
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
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
            import('./cadastro-atleta/cadastro-atleta.module').then(
              (m) => m.CadastroAtletaPageModule
          ),
      },
      {
        path: 'cadastro-treino',
        loadChildren: () =>
          import('./treino/cadastro-treino/cadastro-treino.module')
        
        
        
        
        .then(
            (m) => m.CadastroTreinoPageModule
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
          import('./list-atleta/list-atleta.module').then(
            (m) => m.ListatletaPageModule
          ),
      },
      {
        path: 'edit-atleta',
        loadChildren: () =>
          import('./edit-atleta/edit-atleta.module').then(
            (m) => m.EditarAtletaPageModule
          ),
        },
        {
          path: 'view-news',
          loadChildren: () => import('./view-news/view-news.module').then( m => m.ViewNewsPageModule)
        },
        {
          path: 'edit-news',
          loadChildren: () => import('./edit-news/edit-news.module').then( m => m.EditNewsPageModule)
        },
      {
        path: 'excluir-atleta',
        loadChildren: () =>
          import('./excluir-atleta/excluir-atleta.module').then(
            (m) => m.ExcluiratletaPageModule
          ),
      },
    ],
  },

  {
    path: 'treinos',
    loadChildren: () =>
      import('./treino/treino-list/treino-list.module').then(
        (m) => m.TreinoListModule
      ),
  },
  {path: 'excluir-treinos',
    loadChildren: () =>
      import('./treino/excluir-treino/excluir-treino.module').then(
        (m) => m.ExcluirTreinoModule
      ),}
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
