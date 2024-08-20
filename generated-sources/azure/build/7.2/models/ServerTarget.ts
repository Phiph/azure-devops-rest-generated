/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PhaseTarget } from './PhaseTarget';
import type { ServerTargetExecutionOptions } from './ServerTargetExecutionOptions';
/**
 * Represents a phase target that runs on the server.
 */
export type ServerTarget = (PhaseTarget & {
    /**
     * The execution options.
     */
    executionOptions?: ServerTargetExecutionOptions;
});

