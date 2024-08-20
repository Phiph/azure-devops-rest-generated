/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { InputValues } from './InputValues';
export type InputValuesQuery = {
    currentValues?: Record<string, string>;
    /**
     * The input values to return on input, and the result from the consumer on output.
     */
    inputValues?: Array<InputValues>;
    /**
     * Subscription containing information about the publisher/consumer and the current input values
     */
    resource?: any;
};

