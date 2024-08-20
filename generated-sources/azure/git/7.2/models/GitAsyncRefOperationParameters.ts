/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GitAsyncRefOperationSource } from './GitAsyncRefOperationSource';
import type { GitRepository } from './GitRepository';
/**
 * Parameters that are provided in the request body when requesting to cherry pick or revert.
 */
export type GitAsyncRefOperationParameters = {
    /**
     * Proposed target branch name for the cherry pick or revert operation.
     */
    generatedRefName?: string;
    /**
     * The target branch for the cherry pick or revert operation.
     */
    ontoRefName?: string;
    /**
     * The git repository for the cherry pick or revert operation.
     */
    repository?: GitRepository;
    /**
     * Details about the source of the cherry pick or revert operation (e.g. A pull request or a specific commit).
     */
    source?: GitAsyncRefOperationSource;
};

