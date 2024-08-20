/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Data controlling a single diagnostic setting for a subscription.
 */
export type SubscriptionTracing = {
    /**
     * Indicates whether the diagnostic tracing is enabled or not.
     */
    enabled?: boolean;
    /**
     * Trace until the specified end date.
     */
    endDate?: string;
    /**
     * The maximum number of result details to trace.
     */
    maxTracedEntries?: number;
    /**
     * The date and time tracing started.
     */
    startDate?: string;
    /**
     * Trace until remaining count reaches 0.
     */
    tracedEntries?: number;
};

