/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GitBlobRef } from './GitBlobRef';
import type { GitConflict } from './GitConflict';
import type { GitResolutionPickOneAction } from './GitResolutionPickOneAction';
/**
 * Data object for DeleteRename conflict
 */
export type GitConflictRenameDelete = (GitConflict & {
    baseBlob?: GitBlobRef;
    resolution?: GitResolutionPickOneAction;
    sourceBlob?: GitBlobRef;
    sourceNewPath?: string;
});

