/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { InputFilter } from './InputFilter';
import type { Subscription } from './Subscription';
/**
 * Defines a query for service hook subscriptions.
 */
export type SubscriptionsQuery = {
    /**
     * Optional consumer action id to restrict the results to (null for any)
     */
    consumerActionId?: string;
    /**
     * Optional consumer id to restrict the results to (null for any)
     */
    consumerId?: string;
    /**
     * Filter for subscription consumer inputs
     */
    consumerInputFilters?: Array<InputFilter>;
    /**
     * Optional event type id to restrict the results to (null for any)
     */
    eventType?: string;
    /**
     * Optional publisher id to restrict the results to (null for any)
     */
    publisherId?: string;
    /**
     * Filter for subscription publisher inputs
     */
    publisherInputFilters?: Array<InputFilter>;
    /**
     * Results from the query
     */
    results?: Array<Subscription>;
    /**
     * Optional subscriber filter.
     */
    subscriberId?: string;
};

