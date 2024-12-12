/**
 * Функция для отложенного вызова других функций
 * @param func
 * @param timeout
 */
export const debounceFunction = <T extends (...args: Parameters<T>) => ReturnType<T>>(
  func: T,
  timeout = 0,
) => {
  let timer: ReturnType<typeof setTimeout> | null = null;

  return (...args: Parameters<T>) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, timeout);
  };
};
