/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GitBlobRef } from './GitBlobRef';
import type { GitResolution } from './GitResolution';
export type GitResolutionMergeContent = (GitResolution & {
    mergeType?: 'undecided' | 'takeSourceContent' | 'takeTargetContent' | 'autoMerged' | 'userMerged';
    userMergedBlob?: GitBlobRef;
    userMergedContent?: Array<string>;
});

