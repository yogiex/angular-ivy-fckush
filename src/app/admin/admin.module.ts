import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminComponent } from './admin.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap/dropdown/dropdown.module';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgbCollapseModule,
    NgbDropdownModule,
    HttpClientModule
  ],
  declarations: [AdminComponent, HomeComponent],
})
export class AdminModule {}
