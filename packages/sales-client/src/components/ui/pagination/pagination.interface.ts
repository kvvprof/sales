export interface IPagination {
	limit: number;
	totalCount: number;
	initialPage: number;
	onPageChange(event: { selected: number }): void;
}
