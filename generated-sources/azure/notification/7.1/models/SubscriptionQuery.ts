/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SubscriptionQueryCondition } from './SubscriptionQueryCondition';
/**
 * Notification subscriptions query input.
 */
export type SubscriptionQuery = {
    /**
     * One or more conditions to query on. If more than 2 conditions are specified, the combined results of each condition is returned (i.e. conditions are logically OR'ed).
     */
    conditions?: Array<SubscriptionQueryCondition>;
    /**
     * Flags the refine the types of subscriptions that will be returned from the query.
     */
    queryFlags?: 'none' | 'includeInvalidSubscriptions' | 'includeDeletedSubscriptions' | 'includeFilterDetails' | 'alwaysReturnBasicInformation' | 'includeSystemSubscriptions';
};

