/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GitBlobRef } from './GitBlobRef';
import type { GitConflict } from './GitConflict';
import type { GitResolutionMergeContent } from './GitResolutionMergeContent';
/**
 * Data object for RenameRename conflict
 */
export type GitConflictRenameRename = (GitConflict & {
    baseBlob?: GitBlobRef;
    originalPath?: string;
    resolution?: GitResolutionMergeContent;
    sourceBlob?: GitBlobRef;
    targetBlob?: GitBlobRef;
});

