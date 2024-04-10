import { useEffect } from 'react';
import { UseFormWatch } from 'react-hook-form';
import { IForm } from './join';
type FieldName = 'nickname' | 'email' | 'phone';

export default function useCheckDuplicate(
  watch: UseFormWatch<IForm>,
  field: FieldName,
  url: string,
  setMessage: (message: string) => void,
  setMessageColor: (color: string) => void
) {
  const fieldValue = watch(field);
  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      if (!fieldValue) return;
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ [field]: fieldValue }),
        });
        const result = await response.text();
        if (response.ok) {
          setMessage(result);
          setMessageColor('text-green-500');
        } else {
          setMessage(result);
          setMessageColor('text-red-500');
        }
      } catch (error) {
        console.error('네트워크 오류:', error);
        setMessage('네트워크 오류가 발생했습니다.');
        setMessageColor('text-red-500');
      }
    }, 500);
    return () => clearTimeout(delayDebounceFn);
  }, [fieldValue, url, setMessage, setMessageColor]);
}
