/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TaskDefinitionReference } from './TaskDefinitionReference';
/**
 * Represents a step in a build phase.
 */
export type BuildDefinitionStep = {
    /**
     * Indicates whether this step should run even if a previous step fails.
     */
    alwaysRun?: boolean;
    /**
     * A condition that determines whether this step should run.
     */
    condition?: string;
    /**
     * Indicates whether the phase should continue even if this step fails.
     */
    continueOnError?: boolean;
    /**
     * The display name for this step.
     */
    displayName?: string;
    /**
     * Indicates whether the step is enabled.
     */
    enabled?: boolean;
    environment?: Record<string, string>;
    inputs?: Record<string, string>;
    /**
     * The reference name for this step.
     */
    refName?: string;
    /**
     * Number of retries.
     */
    retryCountOnTaskFailure?: number;
    /**
     * The task associated with this step.
     */
    task?: TaskDefinitionReference;
    /**
     * The time, in minutes, that this step is allowed to run.
     */
    timeoutInMinutes?: number;
};

