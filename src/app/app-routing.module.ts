import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionComponent } from './pages/gestion/gestion.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'main', component: MainComponent},
  {path: 'gestion', component: GestionComponent},
  {path: 'gestion/:id', component: GestionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
