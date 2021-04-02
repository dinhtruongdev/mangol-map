import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs'

import { MeasureSelectComponent } from './components/measure-select/measure-select.component';
import { MeasureComponent } from './measure.component';
import { MeasureResultsComponent } from './components/measure-results/measure-results.component';

@NgModule({
  imports: [
    CommonModule,
    MatSelectModule,
    MatDividerModule,
    MatIconModule,
    MatTabsModule
  ],
  declarations: [MeasureComponent, MeasureSelectComponent, MeasureResultsComponent],
  exports: [MeasureComponent]
})
export class MeasureModule {}
