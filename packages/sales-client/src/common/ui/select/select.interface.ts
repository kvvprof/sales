export interface IOption<T> {
  name: string;
  payload?: T;
}

export interface ISelect<T> {
  label?: string;
  placeholder?: string;
  defaultSelected?: IOption<T> | null;
  options: IOption<T>[];
  error?: string | null;
  isLoading?: boolean;
  isAbsoluteListPosition?: boolean;
  onSelect(option: IOption<T>): void;
  onDelete(): void;
  loadOptions?(searchValue: string): void;
}
