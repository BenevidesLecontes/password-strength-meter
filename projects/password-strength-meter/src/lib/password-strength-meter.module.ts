import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PasswordStrengthMeterComponent} from './password-strength-meter.component';
import {PasswordStrengthConfig} from './config/password-strength-config';
import {CONFIG_TOKEN} from './config/configToken';

@NgModule({
  imports: [CommonModule],
  declarations: [PasswordStrengthMeterComponent],
  exports: [PasswordStrengthMeterComponent]
})
export class PasswordStrengthMeterModule {
  public static forRoot(config: PasswordStrengthConfig): ModuleWithProviders {
    return {
      ngModule: PasswordStrengthMeterModule,
      providers: [
        {
          provide: CONFIG_TOKEN,
          useValue: config
        }
      ]
    };
  }
}
