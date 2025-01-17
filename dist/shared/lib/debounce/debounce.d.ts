/**
 * Функция для отложенного вызова других функций
 * @param func
 * @param timeout
 */
export declare const debounceFunction: <T extends (...args: Parameters<T>) => ReturnType<T>>(func: T, timeout?: number) => (...args: Parameters<T>) => void;
