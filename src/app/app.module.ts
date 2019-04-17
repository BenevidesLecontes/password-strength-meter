import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {PasswordStrengthMeterModule} from '@benevideschissanga/angular-password-strength-meter';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ReactiveFormsModule, PasswordStrengthMeterModule.forRoot({
    feedback_messages: {
      use_a_few_words: 'Use poucas palavras, evite frases comuns'
    }
  })],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
