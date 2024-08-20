/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DeploymentJob } from './DeploymentJob';
import type { IgnoredGate } from './IgnoredGate';
export type ReleaseGates = {
    /**
     * Contains the gates job details of each evaluation.
     */
    deploymentJobs?: Array<DeploymentJob>;
    /**
     * ID of release gates.
     */
    id?: number;
    /**
     * List of ignored gates.
     */
    ignoredGates?: Array<IgnoredGate>;
    /**
     * Gates last modified time.
     */
    lastModifiedOn?: string;
    /**
     * Run plan ID of the gates.
     */
    runPlanId?: string;
    /**
     * Gates stabilization completed date and time.
     */
    stabilizationCompletedOn?: string;
    /**
     * Gates evaluation started time.
     */
    startedOn?: string;
    /**
     * Status of release gates.
     */
    status?: 'none' | 'pending' | 'inProgress' | 'succeeded' | 'failed' | 'canceled';
    /**
     * Date and time at which all gates executed successfully.
     */
    succeedingSince?: string;
};

