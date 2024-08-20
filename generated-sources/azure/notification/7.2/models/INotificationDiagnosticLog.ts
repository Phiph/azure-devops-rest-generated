/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NotificationDiagnosticLogMessage } from './NotificationDiagnosticLogMessage';
/**
 * Abstraction interface for the diagnostic log.  Primarily for deserialization.
 */
export type INotificationDiagnosticLog = {
    /**
     * Identifier used for correlating to other diagnostics that may have been recorded elsewhere.
     */
    activityId?: string;
    /**
     * Description of what subscription or notification job is being logged.
     */
    description?: string;
    /**
     * Time the log ended.
     */
    endTime?: string;
    /**
     * Unique instance identifier.
     */
    id?: string;
    /**
     * Type of information being logged.
     */
    logType?: string;
    /**
     * List of log messages.
     */
    messages?: Array<NotificationDiagnosticLogMessage>;
    /**
     * Dictionary of log properties and settings for the job.
     */
    properties?: Record<string, string>;
    /**
     * This identifier depends on the logType.  For notification jobs, this will be the job Id. For subscription tracing, this will be a special root Guid with the subscription Id encoded.
     */
    source?: string;
    /**
     * Time the log started.
     */
    startTime?: string;
};

