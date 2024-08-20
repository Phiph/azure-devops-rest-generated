/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ServerTargetExecutionOptions } from './ServerTargetExecutionOptions';
/**
 * Represents options for running a phase based on values specified by a list of variables.
 */
export type VariableMultipliersServerExecutionOptions = (ServerTargetExecutionOptions & {
    /**
     * Indicates whether failure of one job should prevent the phase from running in other jobs.
     */
    continueOnError?: boolean;
    /**
     * The maximum number of server jobs to run in parallel.
     */
    maxConcurrency?: number;
    multipliers?: Array<string>;
});

