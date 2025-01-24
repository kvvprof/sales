export interface IPagination {
  limit: number;
  totalCount: number;
  initialPage: number;
  onChange(event: { selected: number }): void;
}
