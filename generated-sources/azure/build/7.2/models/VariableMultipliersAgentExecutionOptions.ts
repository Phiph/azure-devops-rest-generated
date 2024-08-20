/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AgentTargetExecutionOptions } from './AgentTargetExecutionOptions';
/**
 * Represents options for running a phase based on values specified by a list of variables.
 */
export type VariableMultipliersAgentExecutionOptions = (AgentTargetExecutionOptions & {
    /**
     * Indicates whether failure on one agent should prevent the phase from running on other agents.
     */
    continueOnError?: boolean;
    /**
     * The maximum number of agents to use in parallel.
     */
    maxConcurrency?: number;
    multipliers?: Array<string>;
});

