import {
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    MatTooltipModule, MatTableModule, MatSortModule, MatTabsModule, MatRadioModule
} from '@angular/material';
import { NgModule } from '@angular/core';

let imports = [MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    MatTooltipModule,
    MatTableModule,
    MatSortModule,
    MatTabsModule,
    MatRadioModule
];

@NgModule({
    imports: imports,
    exports: imports,
    declarations: [],
})
export class MaterialModule { }