/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NotificationDetails } from './NotificationDetails';
/**
 * Defines the data contract of the result of processing an event for a subscription.
 */
export type Notification = {
    /**
     * Gets or sets date and time that this result was created.
     */
    createdDate?: string;
    /**
     * Details about this notification (if available)
     */
    details?: NotificationDetails;
    /**
     * The event id associated with this notification
     */
    eventId?: string;
    /**
     * The notification id
     */
    id?: number;
    /**
     * Gets or sets date and time that this result was last modified.
     */
    modifiedDate?: string;
    /**
     * Result of the notification
     */
    result?: 'pending' | 'succeeded' | 'failed' | 'filtered';
    /**
     * Status of the notification
     */
    status?: 'queued' | 'processing' | 'requestInProgress' | 'completed';
    /**
     * The subscriber Id  associated with this notification. This is the last identity who touched in the subscription. In case of test notifications it can be the tester if the subscription is not created yet.
     */
    subscriberId?: string;
    /**
     * The subscription id associated with this notification
     */
    subscriptionId?: string;
};

