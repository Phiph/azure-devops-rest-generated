/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * A request for a resource's exclusive lock
 */
export type ResourceLockRequest = {
    /**
     * The date/time this request was assigned.
     */
    assignTime?: string;
    /**
     * The branch the lock belongs to. It's used only by RunLatest exclusive locks of persisted stages.
     */
    branch?: string;
    /**
     * The ID of the check run waiting on this request
     */
    checkRunId?: string;
    /**
     * The ID of the pipeline that requested this resource
     */
    definitionId?: number;
    /**
     * The date/time this request was finished.
     */
    finishTime?: string;
    /**
     * The behavior this request should exhibit in relation to other lock requests
     */
    lockType?: 'runLatest' | 'sequential' | 'branchRunLatest' | 'parallel';
    /**
     * Attempt of the graph node
     */
    nodeAttempt?: number;
    /**
     * Name of the graph node (currently stage) requesting this resource
     */
    nodeName?: string;
    /**
     * Internal ID for the orchestration plan connected with this request.
     */
    planId?: string;
    /**
     * The ID of the project of the check run and definition exist in
     */
    projectId?: string;
    /**
     * The date/time this request was queued.
     */
    queueTime?: string;
    /**
     * ID of the request.
     */
    requestId?: number;
    /**
     * The id of the resource
     */
    resourceId?: string;
    /**
     * The type of the resource
     */
    resourceType?: string;
    /**
     * The result of this request.
     */
    status?: 'queued' | 'inUse' | 'finished' | 'timedOut' | 'canceled' | 'abandoned' | 'waitingOnChecks';
};

