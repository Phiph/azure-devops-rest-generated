/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IdentityRef } from './IdentityRef';
import type { ISubscriptionChannel } from './ISubscriptionChannel';
import type { ISubscriptionFilter } from './ISubscriptionFilter';
import type { SubscriptionScope } from './SubscriptionScope';
/**
 * Parameters for creating a new subscription. A subscription defines criteria for matching events and how the subscription's subscriber should be notified about those events.
 */
export type NotificationSubscriptionCreateParameters = {
    /**
     * Channel for delivering notifications triggered by the new subscription.
     */
    channel?: ISubscriptionChannel;
    /**
     * Brief description for the new subscription. Typically describes filter criteria which helps identity the subscription.
     */
    description?: string;
    /**
     * Matching criteria for the new subscription. ExpressionFilter
     */
    filter?: ISubscriptionFilter;
    /**
     * The container in which events must be published from in order to be matched by the new subscription. If not specified, defaults to the current host (typically an account or project collection). For example, a subscription scoped to project A will not produce notifications for events published from project B.
     */
    scope?: SubscriptionScope;
    /**
     * User or group that will receive notifications for events matching the subscription's filter criteria. If not specified, defaults to the calling user.
     */
    subscriber?: IdentityRef;
};

