/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ReleaseTask } from './ReleaseTask';
export type DeploymentJob = {
    /**
     * Parent task of all executed tasks.
     */
    job?: ReleaseTask;
    /**
     * List of  executed tasks with in job.
     */
    tasks?: Array<ReleaseTask>;
};

