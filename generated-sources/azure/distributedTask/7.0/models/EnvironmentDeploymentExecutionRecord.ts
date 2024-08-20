/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TaskOrchestrationOwner } from './TaskOrchestrationOwner';
/**
 * EnvironmentDeploymentExecutionRecord.
 */
export type EnvironmentDeploymentExecutionRecord = {
    /**
     * Definition of the environment deployment execution owner
     */
    definition?: TaskOrchestrationOwner;
    /**
     * Id of the Environment
     */
    environmentId?: number;
    /**
     * Finish time of the environment deployment execution
     */
    finishTime?: string;
    /**
     * Id of the Environment deployment execution history record
     */
    id?: number;
    /**
     * Job Attempt
     */
    jobAttempt?: number;
    /**
     * Job name
     */
    jobName?: string;
    /**
     * Owner of the environment deployment execution record
     */
    owner?: TaskOrchestrationOwner;
    /**
     * Plan Id
     */
    planId?: string;
    /**
     * Plan type of the environment deployment execution record
     */
    planType?: string;
    /**
     * Queue time of the environment deployment execution
     */
    queueTime?: string;
    /**
     * Request identifier of the Environment deployment execution history record
     */
    requestIdentifier?: string;
    /**
     * Resource Id
     */
    resourceId?: number;
    /**
     * Result of the environment deployment execution
     */
    result?: 'succeeded' | 'succeededWithIssues' | 'failed' | 'canceled' | 'skipped' | 'abandoned';
    /**
     * Project Id
     */
    scopeId?: string;
    /**
     * Service owner Id
     */
    serviceOwner?: string;
    /**
     * Stage Attempt
     */
    stageAttempt?: number;
    /**
     * Stage name
     */
    stageName?: string;
    /**
     * Start time of the environment deployment execution
     */
    startTime?: string;
};

