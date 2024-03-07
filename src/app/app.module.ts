import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AustraliaComponent } from './australia/australia.component';
import { MalaysiaComponent } from './malaysia/malaysia.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    AustraliaComponent,
    MalaysiaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
