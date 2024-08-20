/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Additional status information about an import request.
 */
export type GitImportStatusDetail = {
    /**
     * All valid steps for the import process
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

