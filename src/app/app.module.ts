import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CustomMaterialModule } from './custom-material-module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NoopAnimationsModule,
    // BrowserAnimationsModule,
    CustomMaterialModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
