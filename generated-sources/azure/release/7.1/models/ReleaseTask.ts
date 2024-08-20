/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Issue } from './Issue';
import type { WorkflowTaskReference } from './WorkflowTaskReference';
export type ReleaseTask = {
    /**
     * Agent name on which task executed.
     */
    agentName?: string;
    /**
     * Finish time of the release task.
     */
    finishTime?: string;
    /**
     * ID of the release task.
     */
    id?: number;
    /**
     * List of issues occurred while execution of task.
     */
    issues?: Array<Issue>;
    /**
     * Number of lines log release task has.
     */
    lineCount?: number;
    /**
     * Log URL of the task.
     */
    logUrl?: string;
    /**
     * Name of the task.
     */
    name?: string;
    /**
     * Task execution complete precent.
     */
    percentComplete?: number;
    /**
     * Rank of the release task.
     */
    rank?: number;
    /**
     * Result code of the task.
     */
    resultCode?: string;
    /**
     * ID of the release task.
     */
    startTime?: string;
    /**
     * Status of release task.
     */
    status?: 'unknown' | 'pending' | 'inProgress' | 'success' | 'failure' | 'canceled' | 'skipped' | 'succeeded' | 'failed' | 'partiallySucceeded';
    /**
     * Workflow task reference.
     */
    task?: WorkflowTaskReference;
    /**
     * Timeline record ID of the release task.
     */
    timelineRecordId?: string;
};

