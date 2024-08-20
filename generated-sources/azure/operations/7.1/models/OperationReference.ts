/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Reference for an async operation.
 */
export type OperationReference = {
    /**
     * Unique identifier for the operation.
     */
    id?: string;
    /**
     * Unique identifier for the plugin.
     */
    pluginId?: string;
    /**
     * The current status of the operation.
     */
    status?: 'notSet' | 'queued' | 'inProgress' | 'cancelled' | 'succeeded' | 'failed';
    /**
     * URL to get the full operation object.
     */
    url?: string;
};

