/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NotificationDiagnosticLogMessage } from './NotificationDiagnosticLogMessage';
/**
 * Abstract base class for all of the diagnostic logs.
 */
export type NotificationDiagnosticLog = {
    /**
     * Identifier used for correlating to other diagnostics that may have been recorded elsewhere.
     */
    activityId?: string;
    description?: string;
    endTime?: string;
    errors?: number;
    /**
     * Unique instance identifier.
     */
    id?: string;
    logType?: string;
    messages?: Array<NotificationDiagnosticLogMessage>;
    properties?: Record<string, string>;
    /**
     * This identifier depends on the logType.  For notification jobs, this will be the job Id. For subscription tracing, this will be a special root Guid with the subscription Id encoded.
     */
    source?: string;
    startTime?: string;
    warnings?: number;
};

