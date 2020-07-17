import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ScrollingModule} from '@angular/cdk/scrolling';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ScrollComponent } from './scroll.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ScrollingModule],
  declarations: [ AppComponent, HelloComponent, ScrollComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
