export interface FeedbackMessages {
  use_a_few_words?: string;
  no_need_for_mixed_chars?: string;
  uncommon_words_are_better?: string;
  straight_rows_of_keys_are_easy?: string;
  short_keyboard_patterns_are_easy?: string;
  use_longer_keyboard_patterns?: string;
  repeated_chars_are_easy?: string;
  repeated_patterns_are_easy?: string;
  avoid_repeated_chars?: string;
  sequences_are_easy?: string;
  avoid_sequences?: string;
  recent_years_are_easy?: string;
  avoid_recent_years?: string;
  avoid_associated_years?: string;
  dates_are_easy?: string;
  avoid_associated_dates_and_years?: string;
  top10_common_password?: string;
  top100_common_password?: string;
  very_common_password?: string;
  similar_to_common_password?: string;
  a_word_is_easy?: string;
  names_are_easy?: string;
  common_names_are_easy?: string;
  capitalization_doesnt_help?: string;
  all_uppercase_doesnt_help?: string;
  reverse_doesnt_help?: string;
}

export interface PasswordStrengthConfig {
  feedback_messages: FeedbackMessages;
  [key: string]: any;
}
