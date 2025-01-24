export interface IDatePicker {
  name: string;
  value: string;
  label?: string;
  error?: string | null;
  onChange(date: string): void;
}
