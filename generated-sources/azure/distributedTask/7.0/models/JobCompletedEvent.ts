/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { JobEvent } from './JobEvent';
export type JobCompletedEvent = (JobEvent & {
    agentShuttingDown?: boolean;
    requestId?: number;
    result?: 'succeeded' | 'succeededWithIssues' | 'failed' | 'canceled' | 'skipped' | 'abandoned';
});

