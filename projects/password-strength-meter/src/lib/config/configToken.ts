import {InjectionToken} from '@angular/core';
import {PasswordStrengthConfig} from './password-strength-config';

export const CONFIG_TOKEN = new InjectionToken<PasswordStrengthConfig>(
  'Config'
);
