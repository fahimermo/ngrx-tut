import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers/tutorial.reducer';
import { CreateComponent } from './create/create.component';
import { ReadComponent } from './read/read.component';

@NgModule({
  declarations: [AppComponent, CreateComponent, ReadComponent],
  imports: [BrowserModule, StoreModule.forRoot({ tutorial: reducer })],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
