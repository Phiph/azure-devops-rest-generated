/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * This class represents an audit stream
 */
export type AuditStream = {
    /**
     * Inputs used to communicate with external service. Inputs could be url, a connection string, a token, etc.
     */
    consumerInputs?: Record<string, string>;
    /**
     * Type of the consumer, i.e. splunk, azureEventHub, etc.
     */
    consumerType?: string;
    /**
     * The time when the stream was created
     */
    createdTime?: string;
    /**
     * Used to identify individual streams
     */
    displayName?: string;
    /**
     * Unique stream identifier
     */
    id?: number;
    /**
     * Status of the stream, Enabled, Disabled
     */
    status?: 'unknown' | 'enabled' | 'disabledByUser' | 'disabledBySystem' | 'deleted' | 'backfilling';
    /**
     * Reason for the current stream status, i.e. Disabled by the system, Invalid credentials, etc.
     */
    statusReason?: string;
    /**
     * The time when the stream was last updated
     */
    updatedTime?: string;
};

