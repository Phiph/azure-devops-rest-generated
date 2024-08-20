/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ExecutionInput } from './ExecutionInput';
export type ParallelExecutionInputBase = (ExecutionInput & {
    /**
     * Indicate whether continue execution of deployment on error or not.
     */
    continueOnError?: boolean;
    /**
     * Maximum number of agents used while parallel execution.
     */
    maxNumberOfAgents?: number;
});

