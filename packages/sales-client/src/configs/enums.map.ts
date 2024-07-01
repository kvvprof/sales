import { ProductCategory } from '@/__types__/graphql';

export const CLIENT_CATEGORY_ROUTE_MAP = {
	INDIVIDUAL: 'individual',
	INDIVIDUAL_MINOR: 'individual-minor',
	ENTITY: 'entity',
} as const;

export const PRODUCT_CATEGORY_MAP = {
	FLAT: 'Квартира',
	OFFICE: 'Офис',
	APARTMENT: 'Апартаменты',
	STORAGE_ROOM: 'Кладовка',
	PARKING_SPACE: 'Машино-место',
} as const;

export const AGENCY_CONTRACT_TYPE_MAP = {
	REAL_ESTATE_AGENCY_CONTRACT: 'АН',
	MIP_AGENCY_CONTRACT: 'МиП',
} as const;

export const SCHEDULED_PAYMENT_TYPE_MAP = {
	OWN: 'Собственные',
	MORTGAGE: 'Ипотека',
	EXCHANGE: 'Обмен',
	MATERNITY_CAPITAL: 'Материнский капитал',
} as const;

export const CLIENT_CONTRACT_ROUTE_MAP = {
	DDU: 'ddu',
	DKP: 'DKP',
} as const;

export const CLIENT_CONTRACT_TYPE_MAP = {
	DDU: 'ДДУ',
	DKP: 'ДКП',
} as const;

export const PRODUCT_CATEGORY_MAP_BY_ID = {
	1: ProductCategory.Flat,
	2: ProductCategory.Office,
	3: ProductCategory.Apartment,
	4: ProductCategory.StorageRoom,
	5: ProductCategory.ParkingSpace,
} as const;

export const USER_ROLE_MAP = {
	ADMINISTRATOR: 'Администратор',
	DIRECTOR: 'Директор',
	SALES_EMPLOYEE: 'Сотрудник отдела продаж',
} as const;
