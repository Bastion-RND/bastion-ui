interface IInputGroupContextType {
    inputGroupId: string;
    ariaDescribedby: string;
}
export declare const InputGroupContext: import('react').Context<IInputGroupContextType>;
export declare const useInputGroupContext: ({ withException }: {
    withException: boolean;
}) => IInputGroupContextType;
export {};
