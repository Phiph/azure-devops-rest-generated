/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * A valid retention lease prevents automated systems from deleting a pipeline run.
 */
export type RetentionLease = {
    /**
     * When the lease was created.
     */
    createdOn?: string;
    /**
     * The pipeline definition of the run.
     */
    definitionId?: number;
    /**
     * The unique identifier for this lease.
     */
    leaseId?: number;
    /**
     * Non-unique string that identifies the owner of a retention lease.
     */
    ownerId?: string;
    /**
     * If set, this lease will also prevent the pipeline from being deleted while the lease is still valid.
     */
    protectPipeline?: boolean;
    /**
     * The pipeline run protected by this lease.
     */
    runId?: number;
    /**
     * The last day the lease is considered valid.
     */
    validUntil?: string;
};

