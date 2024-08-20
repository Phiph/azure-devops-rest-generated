/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { JobEvent } from './JobEvent';
export type JobCompletedEvent = (JobEvent & {
    /**
     * Indicates whether the agent is in the process of shutting down.
     */
    agentShuttingDown?: boolean;
    /**
     * The ID of the request.
     */
    requestId?: number;
    /**
     * The result of the request.
     */
    result?: 'succeeded' | 'succeededWithIssues' | 'failed' | 'canceled' | 'skipped' | 'abandoned';
});

