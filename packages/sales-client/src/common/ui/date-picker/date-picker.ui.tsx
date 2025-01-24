import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { format, isValid } from 'date-fns';
import { ru } from 'date-fns/locale/ru';

import { IDatePicker } from '@/common/ui/date-picker/date-picker.interface';

export const DatePickerUI = ({
  name,
  value,
  label,
  error,
  onChange,
}: IDatePicker) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ru}>
      <div className='relative flex flex-col gap-1'>
        {label && <label className='text-c-text-muted'>{label}</label>}
        <DatePicker
          name={name}
          value={value ? new Date(value) : null}
          format='dd.MM.yyyy'
          sx={{
            '& .MuiInputBase-input': {
              paddingLeft: '12px',
              paddingRight: '12px',
              paddingTop: '8px',
              paddingBottom: '8px',
              fontSize: '14px',
              color: '#212843',
              backgroundColor: '#F2F2F2',
              borderRadius: '6px',
            },
            '& .MuiOutlinedInput-root': {
              backgroundColor: '#F2F2F2',
              borderRadius: '6px',
              '& .MuiOutlinedInput-notchedOutline': {
                border: 'none',
              },
            },
            '& .MuiPickersDay-root.Mui-selected': {
              backgroundColor: '#343F68',
            },
            '& .MuiPickersDay-root:hover': {
              backgroundColor: '#F2F2F2',
            },
            '& .MuiIconButton-root': {
              backgroundColor: 'transparent',
            },
            '& .MuiSvgIcon-root': {
              width: '20px',
              height: '20px',
              color: '#343F68',
            },
          }}
          onChange={(date) => {
            if (date && isValid(date)) {
              onChange(format(date, 'yyyy-MM-dd'));
            } else {
              onChange('');
            }
          }}
        />
        {error && (
          <p className='error-message absolute bottom-[-15px] right-0'>
            {error}
          </p>
        )}
      </div>
    </LocalizationProvider>
  );
};
