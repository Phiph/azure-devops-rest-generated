/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { JobEvent } from './JobEvent';
export type JobCanceledEvent = (JobEvent & {
    /**
     * The reason for job cancellation.
     */
    reason?: string;
    /**
     * The job's timeout interval.
     */
    timeout?: string;
});

