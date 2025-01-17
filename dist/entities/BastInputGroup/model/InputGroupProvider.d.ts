interface IInputGroupContextType {
    inputGroupId: string;
}
export declare const InputGroupContext: import('react').Context<IInputGroupContextType>;
export declare const useInputGroupContext: ({ withException }: {
    withException: boolean;
}) => IInputGroupContextType;
export {};
