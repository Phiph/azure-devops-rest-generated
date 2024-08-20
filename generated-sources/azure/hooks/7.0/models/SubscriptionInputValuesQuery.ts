/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { InputValues } from './InputValues';
import type { Subscription } from './Subscription';
/**
 * Query for obtaining information about the possible/allowed values for one or more subscription inputs
 */
export type SubscriptionInputValuesQuery = {
    /**
     * The input values to return on input, and the result from the consumer on output.
     */
    inputValues?: Array<InputValues>;
    /**
     * The scope at which the properties to query belong
     */
    scope?: 'publisher' | 'consumer';
    /**
     * Subscription containing information about the publisher/consumer and the current input values
     */
    subscription?: Subscription;
};

