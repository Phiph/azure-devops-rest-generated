/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Summary of a particular result and count.
 */
export type NotificationResultsSummaryDetail = {
    /**
     * Count of notification sent out with a matching result.
     */
    notificationCount?: number;
    /**
     * Result of the notification
     */
    result?: 'pending' | 'succeeded' | 'failed' | 'filtered';
};

