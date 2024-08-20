/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ServiceEndpointExecutionOwner } from './ServiceEndpointExecutionOwner';
/**
 * Represents service endpoint execution data.
 */
export type ServiceEndpointExecutionData = {
    /**
     * Gets the definition of service endpoint execution owner.
     */
    definition?: ServiceEndpointExecutionOwner;
    /**
     * Gets the finish time of service endpoint execution.
     */
    finishTime?: string;
    /**
     * Gets the Id of service endpoint execution data.
     */
    id?: number;
    /**
     * Gets the owner of service endpoint execution data.
     */
    owner?: ServiceEndpointExecutionOwner;
    /**
     * Gets the plan type of service endpoint execution data.
     */
    planType?: string;
    /**
     * Gets the result of service endpoint execution.
     */
    result?: 'succeeded' | 'succeededWithIssues' | 'failed' | 'canceled' | 'skipped' | 'abandoned';
    /**
     * Gets the start time of service endpoint execution.
     */
    startTime?: string;
};

