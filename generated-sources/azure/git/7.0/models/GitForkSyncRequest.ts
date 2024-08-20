/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GitForkOperationStatusDetail } from './GitForkOperationStatusDetail';
import type { GlobalGitRepositoryKey } from './GlobalGitRepositoryKey';
import type { ReferenceLinks } from './ReferenceLinks';
import type { SourceToTargetRef } from './SourceToTargetRef';
/**
 * Request to sync data between two forks.
 */
export type GitForkSyncRequest = {
    /**
     * Collection of related links
     */
    _links?: ReferenceLinks;
    detailedStatus?: GitForkOperationStatusDetail;
    /**
     * Unique identifier for the operation.
     */
    operationId?: number;
    /**
     * Fully-qualified identifier for the source repository.
     */
    source?: GlobalGitRepositoryKey;
    /**
     * If supplied, the set of ref mappings to use when performing a "sync" or create. If missing, all refs will be synchronized.
     */
    sourceToTargetRefs?: Array<SourceToTargetRef>;
    status?: 'queued' | 'inProgress' | 'completed' | 'failed' | 'abandoned';
};

