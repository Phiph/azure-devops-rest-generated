/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type BaseDeploymentInput = {
    /**
     * Gets or sets the job condition.
     */
    condition?: string;
    /**
     * Gets or sets the job cancel timeout in minutes for deployment which are cancelled by user for this release environment.
     */
    jobCancelTimeoutInMinutes?: number;
    /**
     * Gets or sets the override inputs.
     */
    overrideInputs?: Record<string, string>;
    /**
     * Gets or sets the job execution timeout in minutes for deployment which are queued against this release environment.
     */
    timeoutInMinutes?: number;
};

