/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NotificationDiagnosticLog } from './NotificationDiagnosticLog';
export type SubscriptionTraceDiagnosticLog = (NotificationDiagnosticLog & {
    /**
     * Indicates the job Id that processed or delivered this subscription
     */
    jobId?: string;
    /**
     * Indicates unique instance identifier for the job that processed or delivered this subscription
     */
    jobInstanceId?: string;
    subscriptionId?: string;
});

