/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { JobEvent } from './JobEvent';
export type JobCanceledEvent = (JobEvent & {
    reason?: string;
    timeout?: string;
});

