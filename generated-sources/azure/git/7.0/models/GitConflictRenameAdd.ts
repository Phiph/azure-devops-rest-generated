/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GitBlobRef } from './GitBlobRef';
import type { GitConflict } from './GitConflict';
import type { GitResolutionPathConflict } from './GitResolutionPathConflict';
/**
 * Data object for AddRename conflict
 */
export type GitConflictRenameAdd = (GitConflict & {
    baseBlob?: GitBlobRef;
    resolution?: GitResolutionPathConflict;
    sourceBlob?: GitBlobRef;
    sourceOriginalPath?: string;
    targetBlob?: GitBlobRef;
});

