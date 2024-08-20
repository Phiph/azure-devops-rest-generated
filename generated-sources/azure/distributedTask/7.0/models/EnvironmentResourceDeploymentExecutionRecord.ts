/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * EnvironmentResourceDeploymentExecutionRecord.
 */
export type EnvironmentResourceDeploymentExecutionRecord = {
    /**
     * Id of the Environment
     */
    environmentId?: number;
    /**
     * Finish time of the environment resource deployment execution
     */
    finishTime?: string;
    /**
     * Id of the Environment deployment execution history record
     */
    requestId?: number;
    /**
     * Resource Id
     */
    resourceId?: number;
    /**
     * Result of the environment deployment execution
     */
    result?: 'succeeded' | 'succeededWithIssues' | 'failed' | 'canceled' | 'skipped' | 'abandoned';
    /**
     * Start time of the environment resource deployment execution
     */
    startTime?: string;
};

