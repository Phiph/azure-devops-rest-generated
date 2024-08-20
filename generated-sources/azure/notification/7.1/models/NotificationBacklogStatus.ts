/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type NotificationBacklogStatus = {
    captureTime?: string;
    channel?: string;
    jobId?: string;
    lastJobBatchStartTime?: string;
    lastJobProcessedTime?: string;
    lastNotificationBatchStartTime?: string;
    lastNotificationProcessedTime?: string;
    oldestPendingNotificationTime?: string;
    publisher?: string;
    /**
     * Null status is unprocessed
     */
    status?: string;
    unprocessedNotifications?: number;
};

