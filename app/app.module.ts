import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, XHRBackend } from '@angular/http';

import { AppComponent }   from './app.component';
import { AppRoutingModule, routedComponents } from './app-routing.module';
import { CharacterService } from './character.service'

import { AlertModule } from './alert/alert.module';
import { NotifyModule, NotifyService } from './notify/index';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot(),
    NotifyModule.forRoot(),
    AppRoutingModule,
  ],
  declarations: [AppComponent, routedComponents],
  providers: [CharacterService],
  bootstrap: [AppComponent],
})
export class AppModule { 
  constructor(private notifyService: NotifyService) {
    this.notifyService.config({
      corner: 'right-top',
      delay: 5000
    });
  }
}
