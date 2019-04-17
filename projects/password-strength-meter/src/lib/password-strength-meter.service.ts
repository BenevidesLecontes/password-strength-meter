import {Inject, Injectable, Optional} from '@angular/core';

import * as zxcvbn_ from '@contentpass/zxcvbn';
import {CONFIG_TOKEN} from './config/configToken';
import {PasswordStrengthConfig} from './config/password-strength-config';

const zxcvbn = zxcvbn_;

@Injectable()
export class PasswordStrengthMeterService {
  constructor(
    @Optional() @Inject(CONFIG_TOKEN) private configToken: PasswordStrengthConfig
  ) {
  }

  /**
   *  this will return the password strength score in number
   *  0 - too guessable
   *  1 - very guessable
   *  2 - somewhat guessable
   *  3 - safely unguessable
   *  4 - very unguessable
   *
   *  @param password
   */
  score(password): number {
    const result = this.configToken ? zxcvbn(password, this.configToken) : zxcvbn(password, this.configToken);
    return result.score;
  }

  /**
   * this will return the password strength score with feedback messages
   * return type { score: number; feedback: { suggestions: string[]; warning: string } }
   *
   * @param password
   */
  scoreWithFeedback(
    password
  ): { score: number; feedback: { suggestions: string[]; warning: string } } {
    const result = this.configToken ? zxcvbn(password, this.configToken) : zxcvbn(password, this.configToken);
    return {score: result.score, feedback: result.feedback};
  }
}
