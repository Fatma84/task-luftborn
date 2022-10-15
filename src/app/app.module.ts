import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ProfileSideComponent } from './profile-side/profile-side.component';
import { ItemBoxesComponent } from './item-boxes/item-boxes.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileSideComponent,
    ItemBoxesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
