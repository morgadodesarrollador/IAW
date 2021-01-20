import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
import { ComunesModule } from '../../components/comunes/comunes.module';
import { PortadaComponent } from '../../components/comunes/portada/portada.component';
import { GamasModule } from '../../components/gamas/gamas.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsPageRoutingModule,
    ComunesModule,GamasModule

  ],
  exports: [PortadaComponent],
  declarations: [TabsPage]
})
export class TabsPageModule {}
