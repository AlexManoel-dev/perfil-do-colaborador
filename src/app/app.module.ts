import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeModule } from './home/home.module';
import { CollaboratorProfileModule } from './collaborator-profile/collaborator-profile.module';
import { IonicStorageModule } from '@ionic/storage-angular';
import { Storage } from '@ionic/storage'
import { StorageService } from './api/storage.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    HomeModule,
    CollaboratorProfileModule,
    // IonicStorageModule.forRoot()
  ],
  providers: [
    {
      provide: RouteReuseStrategy,
      useClass: IonicRouteStrategy
    },
    // Storage,
    // StorageService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
