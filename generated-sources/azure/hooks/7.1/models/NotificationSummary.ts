/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NotificationResultsSummaryDetail } from './NotificationResultsSummaryDetail';
/**
 * Summary of the notifications for a subscription.
 */
export type NotificationSummary = {
    /**
     * The notification results for this particular subscription.
     */
    results?: Array<NotificationResultsSummaryDetail>;
    /**
     * The subscription id associated with this notification
     */
    subscriptionId?: string;
};

