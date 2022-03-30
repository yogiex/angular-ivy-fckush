import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicRoutingModule } from './public-routing.module';

import { PublicComponent } from './public.component';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap/collapse/collapse.module';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [CommonModule, PublicRoutingModule, NgbCollapseModule],
  declarations: [PublicComponent, HomeComponent],
})
export class PublicModule {}
