import { XMarkIcon } from '@heroicons/react/24/outline';
import axios from 'axios';
import { useEffect, useState } from 'react';

import { delay, Loader } from '@/common';
import { IPrintout } from '@/components/printout/printout.interface';

export const Printout = ({ id, kind, callback }: IPrintout) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [status, setStatus] = useState<string>(
    'Идет создание распечатки. Пожалуйста, подождите ...',
  );

  useEffect(() => {
    const abortController = new AbortController();

    const handleError = (message: string) => {
      setError(true);
      setStatus(message);
      setLoading(false);
    };

    const getPrintoutStatus = async (checkStatusUrl: string) => {
      const MAX_REQUESTS = 75;
      const DELAY = 5000;

      let requestCount = 0;

      while (requestCount < MAX_REQUESTS) {
        try {
          const { data } = await axios.get<{ completed: boolean }>(
            `${import.meta.env.VITE_SALES_GUARD_URL}/printout?url=${checkStatusUrl}`,
            { signal: abortController.signal },
          );

          if (data.completed) {
            return true;
          }

          requestCount++;

          await delay(DELAY);
        } catch (error) {
          handleError('Произошла ошибка при проверке статуса распечатки.');
          return false;
        }
      }

      handleError('Время ожидания истекло.');
      return false;
    };

    const createPrintout = async () => {
      try {
        const { data } = await axios.post<{ checkStatusUrl: string }>(
          `${import.meta.env.VITE_SALES_GUARD_URL}/printout`,
          { id, kind },
        );

        if (!data.checkStatusUrl) {
          handleError('Не удалось получить URL для проверки статуса.');
          return;
        }

        const result = await getPrintoutStatus(data.checkStatusUrl);

        if (result) {
          callback();
        }
      } catch (error) {
        if (axios.isCancel(error)) {
          return;
        }
        handleError('Произошла ошибка при создании распечатки.');
      } finally {
        setLoading(false);
      }
    };

    createPrintout();

    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <div className='flex flex-col items-center justify-center gap-2'>
      {loading && <Loader size='large' />}
      {error && <XMarkIcon className='text-c-danger h-9 w-9' />}
      <p className='text-center text-lg'>{status}</p>
      <p className='text-center text-xs'>Это окно можно закрыть.</p>
    </div>
  );
};
