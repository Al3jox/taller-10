import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './componente/card/card.component';
import { TablaComponent } from './componente/tabla/tabla.component';

const routes: Routes = [
  {path: 'cards', component: CardComponent},
  {path: 'tabla', component: TablaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
