import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { CollaboratorDetailsComponent } from './collaborator-details/collaborator-details.component';
import { CollaboratorDetailsUiComponent } from './collaborator-details/collaborator-details-ui/collaborator-details-ui.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule
  ],
  declarations: [
    CollaboratorDetailsComponent,
    CollaboratorDetailsUiComponent
  ],
  exports: [
    CollaboratorDetailsComponent,
    CollaboratorDetailsUiComponent
  ]
})
export class ComponentsModule {}
