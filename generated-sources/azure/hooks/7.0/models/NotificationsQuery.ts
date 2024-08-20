/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Notification } from './Notification';
import type { NotificationSummary } from './NotificationSummary';
import type { Subscription } from './Subscription';
/**
 * Defines a query for service hook notifications.
 */
export type NotificationsQuery = {
    /**
     * The subscriptions associated with the notifications returned from the query
     */
    associatedSubscriptions?: Array<Subscription>;
    /**
     * If true, we will return all notification history for the query provided; otherwise, the summary is returned.
     */
    includeDetails?: boolean;
    /**
     * Optional maximum date at which the notification was created
     */
    maxCreatedDate?: string;
    /**
     * Optional maximum number of overall results to include
     */
    maxResults?: number;
    /**
     * Optional maximum number of results for each subscription. Only takes effect when a list of subscription ids is supplied in the query.
     */
    maxResultsPerSubscription?: number;
    /**
     * Optional minimum date at which the notification was created
     */
    minCreatedDate?: string;
    /**
     * Optional publisher id to restrict the results to
     */
    publisherId?: string;
    /**
     * Results from the query
     */
    results?: Array<Notification>;
    /**
     * Optional notification result type to filter results to
     */
    resultType?: 'pending' | 'succeeded' | 'failed' | 'filtered';
    /**
     * Optional notification status to filter results to
     */
    status?: 'queued' | 'processing' | 'requestInProgress' | 'completed';
    /**
     * Optional list of subscription ids to restrict the results to
     */
    subscriptionIds?: Array<string>;
    /**
     * Summary of notifications - the count of each result type (success, fail, ..).
     */
    summary?: Array<NotificationSummary>;
};

