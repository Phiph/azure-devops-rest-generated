/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GitBlobRef } from './GitBlobRef';
import type { GitConflict } from './GitConflict';
import type { GitResolutionMergeContent } from './GitResolutionMergeContent';
/**
 * Data object for EditEdit conflict
 */
export type GitConflictEditEdit = (GitConflict & {
    baseBlob?: GitBlobRef;
    resolution?: GitResolutionMergeContent;
    sourceBlob?: GitBlobRef;
    targetBlob?: GitBlobRef;
});

