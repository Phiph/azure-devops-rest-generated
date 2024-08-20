/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NotificationSubscriptionCreateParameters } from './NotificationSubscriptionCreateParameters';
/**
 * Encapsulates the properties of a SubscriptionEvaluationRequest. It defines the subscription to be evaluated and time interval for events used in evaluation.
 */
export type SubscriptionEvaluationRequest = {
    /**
     * The min created date for the events used for matching in UTC. Use all events created since this date
     */
    minEventsCreatedDate?: string;
    /**
     * User or group that will receive notifications for events matching the subscription's filter criteria. If not specified, defaults to the calling user.
     */
    subscriptionCreateParameters?: NotificationSubscriptionCreateParameters;
};

