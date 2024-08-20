/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GitBlobRef } from './GitBlobRef';
import type { GitConflict } from './GitConflict';
import type { GitResolutionPathConflict } from './GitResolutionPathConflict';
/**
 * Data object for RenameAdd conflict
 */
export type GitConflictAddRename = (GitConflict & {
    baseBlob?: GitBlobRef;
    resolution?: GitResolutionPathConflict;
    sourceBlob?: GitBlobRef;
    targetBlob?: GitBlobRef;
    targetOriginalPath?: string;
});

