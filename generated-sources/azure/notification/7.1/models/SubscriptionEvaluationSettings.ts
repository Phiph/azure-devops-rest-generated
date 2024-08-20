/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Encapsulates the subscription evaluation settings needed for the UI
 */
export type SubscriptionEvaluationSettings = {
    /**
     * Indicates whether subscription evaluation before saving is enabled or not
     */
    enabled?: boolean;
    /**
     * Time interval to check on subscription evaluation job in seconds
     */
    interval?: number;
    /**
     * Threshold on the number of notifications for considering a subscription too noisy
     */
    threshold?: number;
    /**
     * Time out for the subscription evaluation check in seconds
     */
    timeOut?: number;
};

