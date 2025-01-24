import { ScheduledPaymentType } from '@/__types__/graphql';

export const SCHEDULED_PAYMENT_TYPES = [
  {
    name: 'Собственные',
    payload: { scheduledPaymentType: ScheduledPaymentType.Own },
  },
  {
    name: 'Ипотека',
    payload: { scheduledPaymentType: ScheduledPaymentType.Mortgage },
  },
  {
    name: 'Мат. капитал',
    payload: {
      scheduledPaymentType: ScheduledPaymentType.MaternityCapital,
    },
  },
  {
    name: 'Обмен',
    payload: { scheduledPaymentType: ScheduledPaymentType.Exchange },
  },
];
