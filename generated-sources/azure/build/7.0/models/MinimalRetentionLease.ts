/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type MinimalRetentionLease = {
    /**
     * The pipeline definition of the run.
     */
    definitionId?: number;
    /**
     * User-provided string that identifies the owner of a retention lease.
     */
    ownerId?: string;
    /**
     * The pipeline run to protect.
     */
    runId?: number;
};

