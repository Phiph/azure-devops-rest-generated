/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GitBlobRef } from './GitBlobRef';
import type { GitConflict } from './GitConflict';
import type { GitResolutionPickOneAction } from './GitResolutionPickOneAction';
/**
 * Data object for RenameDelete conflict
 */
export type GitConflictDeleteRename = (GitConflict & {
    baseBlob?: GitBlobRef;
    resolution?: GitResolutionPickOneAction;
    targetBlob?: GitBlobRef;
    targetNewPath?: string;
});

