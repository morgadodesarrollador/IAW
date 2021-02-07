import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsPage } from './tabs.page';



const routes: Routes = [
  { path: '', redirectTo: '/tabs/gamas', pathMatch: 'full' },

  {
    path: '',
    component: TabsPage,
    children: [
      { path: '', loadChildren: () => import('../../components/comunes/comunes.module').then(m => m.ComunesModule) },
      { path: 'gamas', loadChildren: () => import('../../components/gamas/gamas.module').then(m => m.GamasModule)   }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
