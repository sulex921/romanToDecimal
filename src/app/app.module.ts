import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { OrderByPipe } from './pipes/order-by.pipe';
import { ToLowerCasePipe } from './pipes/to-lower-case.pipe';
import { LocalStorageComponent } from './components/local-storage/local-storage.component';
import { MainComponent } from './components/main/main.component';


@NgModule({
  declarations: [
    AppComponent,
    OrderByPipe,
    ToLowerCasePipe,
    LocalStorageComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
