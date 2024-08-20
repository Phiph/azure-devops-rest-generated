/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GitBlobRef } from './GitBlobRef';
import type { GitConflict } from './GitConflict';
import type { GitResolutionRename1to2 } from './GitResolutionRename1to2';
/**
 * Data object for Rename1to2 conflict
 */
export type GitConflictRename1to2 = (GitConflict & {
    baseBlob?: GitBlobRef;
    resolution?: GitResolutionRename1to2;
    sourceBlob?: GitBlobRef;
    sourceNewPath?: string;
    targetBlob?: GitBlobRef;
    targetNewPath?: string;
});

