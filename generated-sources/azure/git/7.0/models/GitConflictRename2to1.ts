/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GitBlobRef } from './GitBlobRef';
import type { GitConflict } from './GitConflict';
import type { GitResolutionPathConflict } from './GitResolutionPathConflict';
/**
 * Data object for Rename2to1 conflict
 */
export type GitConflictRename2to1 = (GitConflict & {
    resolution?: GitResolutionPathConflict;
    sourceNewBlob?: GitBlobRef;
    sourceOriginalBlob?: GitBlobRef;
    sourceOriginalPath?: string;
    targetNewBlob?: GitBlobRef;
    targetOriginalBlob?: GitBlobRef;
    targetOriginalPath?: string;
});

