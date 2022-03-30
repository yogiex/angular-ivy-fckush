import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminComponent } from './admin.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap/dropdown/dropdown.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgbCollapseModule,
    NgbDropdownModule,
  ],
  declarations: [AdminComponent, HomeComponent],
})
export class AdminModule {}
