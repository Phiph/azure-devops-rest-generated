/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Job in pipeline. This is related to matrixing in YAML.
 */
export type JobReference = {
    /**
     * Attempt number of the job
     */
    attempt?: number;
    /**
     * Matrixing in YAML generates copies of a job with different inputs in matrix. JobName is the name of those input. Maximum supported length for name is 256 character.
     */
    jobName?: string;
};

