// aqui estão os imports do angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// aqui estão os imports específicos
import { AppComponent } from './app.component';
import { AppPhotosModule } from './photos/photos.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppPhotosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
