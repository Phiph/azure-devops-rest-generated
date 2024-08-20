/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BuildDefinitionStep } from './BuildDefinitionStep';
import type { BuildDefinitionVariable } from './BuildDefinitionVariable';
import type { Dependency } from './Dependency';
import type { PhaseTarget } from './PhaseTarget';
/**
 * Represents a phase of a build definition.
 */
export type Phase = {
    /**
     * The condition that must be true for this phase to execute.
     */
    condition?: string;
    dependencies?: Array<Dependency>;
    /**
     * The job authorization scope for builds queued against this definition.
     */
    jobAuthorizationScope?: 'projectCollection' | 'project';
    /**
     * The cancellation timeout, in minutes, for builds queued against this definition.
     */
    jobCancelTimeoutInMinutes?: number;
    /**
     * The job execution timeout, in minutes, for builds queued against this definition.
     */
    jobTimeoutInMinutes?: number;
    /**
     * The name of the phase.
     */
    name?: string;
    /**
     * The unique ref name of the phase.
     */
    refName?: string;
    steps?: Array<BuildDefinitionStep>;
    /**
     * The target (agent, server, etc.) for this phase.
     */
    target?: PhaseTarget;
    variables?: Record<string, BuildDefinitionVariable>;
};

