import { NgxTethysModule } from 'ngx-tethys';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ThyVoteBasicExampleComponent } from './basic/basic.component';
import { ThyVoteDisabledExampleComponent } from './disabled/disabled.component';
import { ThyVoteIconExampleComponent } from './icon/icon.component';
import { ThyVoteWeakExampleComponent } from './weak/weak.component';

const COMPONENTS = [
    ThyVoteBasicExampleComponent,
    ThyVoteIconExampleComponent,
    ThyVoteWeakExampleComponent,
    ThyVoteDisabledExampleComponent
];

@NgModule({
    declarations: COMPONENTS,
    imports: [CommonModule, FormsModule, NgxTethysModule],
    entryComponents: COMPONENTS,
    exports: COMPONENTS,
    providers: []
})
export class ThyVoteExamplesModule {}
