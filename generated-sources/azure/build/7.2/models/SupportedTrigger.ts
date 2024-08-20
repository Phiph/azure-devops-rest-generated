/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type SupportedTrigger = {
    /**
     * The default interval to wait between polls (only relevant when NotificationType is Polling).
     */
    defaultPollingInterval?: number;
    /**
     * How the trigger is notified of changes.
     */
    notificationType?: string;
    /**
     * The capabilities supported by this trigger.
     */
    supportedCapabilities?: Record<string, 'unsupported' | 'supported' | 'required'>;
    /**
     * The type of trigger.
     */
    type?: 'none' | 'continuousIntegration' | 'batchedContinuousIntegration' | 'schedule' | 'gatedCheckIn' | 'batchedGatedCheckIn' | 'pullRequest' | 'buildCompletion' | 'all';
};

