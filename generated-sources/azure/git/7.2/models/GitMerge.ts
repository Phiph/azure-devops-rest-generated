/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GitMergeOperationStatusDetail } from './GitMergeOperationStatusDetail';
import type { GitMergeParameters } from './GitMergeParameters';
import type { ReferenceLinks } from './ReferenceLinks';
export type GitMerge = (GitMergeParameters & {
    /**
     * Reference links.
     */
    _links?: ReferenceLinks;
    /**
     * Detailed status of the merge operation.
     */
    detailedStatus?: GitMergeOperationStatusDetail;
    /**
     * Unique identifier for the merge operation.
     */
    mergeOperationId?: number;
    /**
     * Status of the merge operation.
     */
    status?: 'queued' | 'inProgress' | 'completed' | 'failed' | 'abandoned';
});

