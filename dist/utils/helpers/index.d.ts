/**
 * Функция для отложенного вызова других функций
 * @param func
 * @param timeout
 */
export declare const debounceFunction: <T extends (...args: any[]) => any>(func: T, timeout?: number) => (...args: Parameters<T>) => void;
