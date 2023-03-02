import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutHeaderComponent } from './pages/layout/layout-header/layout-header.component';
import { LayoutFooterComponent } from './pages/layout/layout-footer/layout-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutHeaderComponent,
    LayoutFooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
