import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ThyFormDirective } from './form.directive';
import { ThyFormGroupComponent } from './form-group.component';
import { ThyFormGroupLabelDirective } from './form-group-label.directive';
import { ThyFormSubmitDirective } from './form-submit.directive';
import { ThyInputModule } from 'ngx-tethys/input';
import { ThyFormGroupFooterComponent } from './from-group-footer/form-group-footer.component';
import { ThyFormGroupErrorComponent } from './form-group-error/form-group-error.component';
import { ThyFormValidatorLoader } from './form-validator-loader';
import { ThyFormValidatorGlobalConfig, THY_VALIDATOR_CONFIG, THY_FORM_CONFIG, THY_FORM_CONFIG_PROVIDER } from './form.class';
import { ThyUniqueCheckValidator, ThyMaxDirective, ThyMinDirective, ThyConfirmValidatorDirective } from './validator/index';
import { ThyAlertModule } from 'ngx-tethys/alert';
import { ThyIconModule } from 'ngx-tethys/icon';
import { ThyTooltipModule } from 'ngx-tethys/tooltip';

@NgModule({
    imports: [CommonModule, FormsModule, ThyInputModule, ThyAlertModule, ThyIconModule, ThyTooltipModule],
    declarations: [
        ThyFormDirective,
        ThyFormGroupComponent,
        ThyFormGroupLabelDirective,
        ThyFormSubmitDirective,
        ThyFormGroupFooterComponent,
        ThyUniqueCheckValidator,
        ThyFormGroupErrorComponent,
        ThyMinDirective,
        ThyMaxDirective,
        ThyConfirmValidatorDirective
    ],
    exports: [
        ThyFormDirective,
        ThyFormGroupComponent,
        ThyFormGroupLabelDirective,
        ThyFormSubmitDirective,
        ThyFormGroupFooterComponent,
        ThyUniqueCheckValidator,
        ThyFormGroupErrorComponent,
        ThyMinDirective,
        ThyMaxDirective,
        ThyConfirmValidatorDirective
    ],
    providers: [ThyFormValidatorLoader, THY_FORM_CONFIG_PROVIDER]
})
export class ThyFormModule {
    static forRoot(config: ThyFormValidatorGlobalConfig): ModuleWithProviders<ThyFormModule> {
        return {
            ngModule: ThyFormModule,
            providers: [
                {
                    provide: THY_VALIDATOR_CONFIG,
                    useValue: config
                }
            ]
        };
    }
}
