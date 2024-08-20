/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BuildTrigger } from './BuildTrigger';
/**
 * Represents a continuous integration (CI) trigger.
 */
export type ContinuousIntegrationTrigger = (BuildTrigger & {
    /**
     * Indicates whether changes should be batched while another CI build is running.
     */
    batchChanges?: boolean;
    branchFilters?: Array<string>;
    /**
     * The maximum number of simultaneous CI builds that will run per branch.
     */
    maxConcurrentBuildsPerBranch?: number;
    pathFilters?: Array<string>;
    /**
     * The polling interval, in seconds.
     */
    pollingInterval?: number;
    /**
     * The ID of the job used to poll an external repository.
     */
    pollingJobId?: string;
    settingsSourceType?: number;
});

