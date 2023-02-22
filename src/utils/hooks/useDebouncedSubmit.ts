import { useCallback } from 'react';
import { debounce, DebounceSettings } from 'lodash';

export const DEBOUNCE_TIMEOUT_IN_SECONDS = 1.5;

const useDebouncedHandler = (
  handlerFun: (...args: any) => any,
  waitSeconds: number = DEBOUNCE_TIMEOUT_IN_SECONDS,
  depths: ReadonlyArray<any> = [],
  config?: DebounceSettings
) => {
  return useCallback(
    debounce(handlerFun, waitSeconds * 1000, { leading: true, trailing: false, ...config }),
    depths
  );
};

export default useDebouncedHandler;
