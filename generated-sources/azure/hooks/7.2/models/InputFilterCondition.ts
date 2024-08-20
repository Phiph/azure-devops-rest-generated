/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * An expression which can be applied to filter a list of subscription inputs
 */
export type InputFilterCondition = {
    /**
     * Whether or not to do a case sensitive match
     */
    caseSensitive?: boolean;
    /**
     * The Id of the input to filter on
     */
    inputId?: string;
    /**
     * The "expected" input value to compare with the actual input value
     */
    inputValue?: string;
    /**
     * The operator applied between the expected and actual input value
     */
    operator?: 'equals' | 'notEquals';
};

