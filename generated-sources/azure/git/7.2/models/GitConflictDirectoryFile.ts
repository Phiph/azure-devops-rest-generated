/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GitBlobRef } from './GitBlobRef';
import type { GitConflict } from './GitConflict';
import type { GitResolutionPathConflict } from './GitResolutionPathConflict';
import type { GitTreeRef } from './GitTreeRef';
/**
 * Data object for FileDirectory conflict
 */
export type GitConflictDirectoryFile = (GitConflict & {
    resolution?: GitResolutionPathConflict;
    sourceTree?: GitTreeRef;
    targetBlob?: GitBlobRef;
});

