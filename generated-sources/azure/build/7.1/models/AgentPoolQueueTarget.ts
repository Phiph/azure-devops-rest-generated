/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AgentPoolQueue } from './AgentPoolQueue';
import type { AgentSpecification } from './AgentSpecification';
import type { AgentTargetExecutionOptions } from './AgentTargetExecutionOptions';
import type { Demand } from './Demand';
import type { PhaseTarget } from './PhaseTarget';
/**
 * Describes how a phase should run against an agent queue.
 */
export type AgentPoolQueueTarget = (PhaseTarget & {
    /**
     * Agent specification of the target.
     */
    agentSpecification?: AgentSpecification;
    /**
     * Enables scripts and other processes launched while executing phase to access the OAuth token
     */
    allowScriptsAuthAccessOption?: boolean;
    demands?: Array<Demand>;
    /**
     * The execution options.
     */
    executionOptions?: AgentTargetExecutionOptions;
    /**
     * The queue.
     */
    queue?: AgentPoolQueue;
});

