/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ReleaseDefinitionGatesOptions = {
    /**
     * Gets or sets as the gates enabled or not.
     */
    isEnabled?: boolean;
    /**
     * Gets or sets the minimum duration for steady results after a successful gates evaluation.
     */
    minimumSuccessDuration?: number;
    /**
     * Gets or sets the time between re-evaluation of gates.
     */
    samplingInterval?: number;
    /**
     * Gets or sets the delay before evaluation.
     */
    stabilizationTime?: number;
    /**
     * Gets or sets the timeout after which gates fail.
     */
    timeout?: number;
};

