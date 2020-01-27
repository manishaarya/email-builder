import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomTemplateComponent } from './custom-template/custom-template.component';
import { VmwareTemplateComponent } from './vmware-template/vmware-template.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CustomTemplateComponent,
    VmwareTemplateComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
