import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VmwareTemplateComponent } from './vmware-template/vmware-template.component';
import { CustomTemplateComponent } from './custom-template/custom-template.component';
const routes: Routes = [{
  path: '',
  component: DashboardComponent,
},
{ path: 'template', component: VmwareTemplateComponent },
{ path: 'new', component: CustomTemplateComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
