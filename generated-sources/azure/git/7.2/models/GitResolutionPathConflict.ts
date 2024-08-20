/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GitResolution } from './GitResolution';
export type GitResolutionPathConflict = (GitResolution & {
    action?: 'undecided' | 'keepSourceRenameTarget' | 'keepSourceDeleteTarget' | 'keepTargetRenameSource' | 'keepTargetDeleteSource';
    renamePath?: string;
});

