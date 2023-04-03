import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card'


const Material = [
MatIconModule, MatInputModule, MatFormFieldModule, MatListModule, MatDividerModule, MatButtonModule, MatTabsModule, ReactiveFormsModule,MatCardModule
]


@NgModule({
  exports: [Material],
  imports: [
    Material
  ]
})
export class MaterialModule { }
