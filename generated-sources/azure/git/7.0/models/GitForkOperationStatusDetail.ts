/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Status information about a requested fork operation.
 */
export type GitForkOperationStatusDetail = {
    /**
     * All valid steps for the forking process
     */
    allSteps?: Array<string>;
    /**
     * Index into AllSteps for the current step
     */
    currentStep?: number;
    /**
     * Error message if the operation failed.
     */
    errorMessage?: string;
};

