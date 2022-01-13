import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent} from './app.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: AppComponent
    },
    { path: 'portfolio', loadChildren: () => import('./portfolio/portfolio.module').then(m => m.PortfolioModule) }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }