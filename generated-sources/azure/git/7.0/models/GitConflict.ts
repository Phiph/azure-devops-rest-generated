/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GitCommitRef } from './GitCommitRef';
import type { GitMergeOriginRef } from './GitMergeOriginRef';
import type { IdentityRef } from './IdentityRef';
import type { ReferenceLinks } from './ReferenceLinks';
export type GitConflict = {
    _links?: ReferenceLinks;
    conflictId?: number;
    conflictPath?: string;
    conflictType?: 'none' | 'addAdd' | 'addRename' | 'deleteEdit' | 'deleteRename' | 'directoryFile' | 'directoryChild' | 'editDelete' | 'editEdit' | 'fileDirectory' | 'rename1to2' | 'rename2to1' | 'renameAdd' | 'renameDelete' | 'renameRename';
    mergeBaseCommit?: GitCommitRef;
    mergeOrigin?: GitMergeOriginRef;
    mergeSourceCommit?: GitCommitRef;
    mergeTargetCommit?: GitCommitRef;
    resolutionError?: 'none' | 'mergeContentNotFound' | 'pathInUse' | 'invalidPath' | 'unknownAction' | 'unknownMergeType' | 'otherError';
    resolutionStatus?: 'unresolved' | 'partiallyResolved' | 'resolved';
    resolvedBy?: IdentityRef;
    resolvedDate?: string;
    url?: string;
};

