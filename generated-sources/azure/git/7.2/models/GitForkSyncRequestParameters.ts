/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GlobalGitRepositoryKey } from './GlobalGitRepositoryKey';
import type { SourceToTargetRef } from './SourceToTargetRef';
/**
 * Parameters for creating a fork request
 */
export type GitForkSyncRequestParameters = {
    /**
     * Fully-qualified identifier for the source repository.
     */
    source?: GlobalGitRepositoryKey;
    /**
     * If supplied, the set of ref mappings to use when performing a "sync" or create. If missing, all refs will be synchronized.
     */
    sourceToTargetRefs?: Array<SourceToTargetRef>;
};

