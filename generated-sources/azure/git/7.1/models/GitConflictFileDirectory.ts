/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GitBlobRef } from './GitBlobRef';
import type { GitConflict } from './GitConflict';
import type { GitResolutionPathConflict } from './GitResolutionPathConflict';
import type { GitTreeRef } from './GitTreeRef';
/**
 * Data object for DirectoryFile conflict
 */
export type GitConflictFileDirectory = (GitConflict & {
    resolution?: GitResolutionPathConflict;
    sourceBlob?: GitBlobRef;
    targetTree?: GitTreeRef;
});

