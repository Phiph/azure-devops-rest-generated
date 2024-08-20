/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ISubscriptionFilter } from './ISubscriptionFilter';
/**
 * Conditions a subscription must match to qualify for the query result set. Not all fields are required. A subscription must match all conditions specified in order to qualify for the result set.
 */
export type SubscriptionQueryCondition = {
    /**
     * Filter conditions that matching subscriptions must have. Typically only the filter's type and event type are used for matching.
     */
    filter?: ISubscriptionFilter;
    /**
     * Flags to specify the the type subscriptions to query for.
     */
    flags?: 'none' | 'groupSubscription' | 'contributedSubscription' | 'canOptOut' | 'teamSubscription' | 'oneActorMatches';
    /**
     * Scope that matching subscriptions must have.
     */
    scope?: string;
    /**
     * ID of the subscriber (user or group) that matching subscriptions must be subscribed to.
     */
    subscriberId?: string;
    /**
     * ID of the subscription to query for.
     */
    subscriptionId?: string;
};

