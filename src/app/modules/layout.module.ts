import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BlankComponent } from './components/blank/blank.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from '../core/header/header.component';
import { NavbarComponent } from '../core/navbar/navbar.component';
import { SidebarComponent } from '../core/sidebar/sidebar.component';


@NgModule({
  declarations: [
    LayoutComponent,
    DashboardComponent,
    BlankComponent,
    LoginComponent,
    NavbarComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
