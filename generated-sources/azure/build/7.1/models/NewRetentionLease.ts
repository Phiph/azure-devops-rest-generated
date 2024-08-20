/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Required information to create a new retention lease.
 */
export type NewRetentionLease = {
    /**
     * The number of days to consider the lease valid. A retention lease valid for more than 100 years (36500 days) will display as retaining the build "forever".
     */
    daysValid?: number;
    /**
     * The pipeline definition of the run.
     */
    definitionId?: number;
    /**
     * User-provided string that identifies the owner of a retention lease.
     */
    ownerId?: string;
    /**
     * If set, this lease will also prevent the pipeline from being deleted while the lease is still valid.
     */
    protectPipeline?: boolean;
    /**
     * The pipeline run to protect.
     */
    runId?: number;
};

