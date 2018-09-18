import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BannerComponent } from './banner/banner.component';
import { NotFoundComponent } from './notfound.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { TemplateformComponent } from './templateform/templateform.component';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [CoreComponent,
    DashboardComponent,
    SidebarComponent,
    BannerComponent,
    NotFoundComponent,
    ReactiveformComponent,
    TemplateformComponent],
  exports: [CoreComponent]
})
export class CoreModule { }
