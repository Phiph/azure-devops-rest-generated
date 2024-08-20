/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GitChange } from './GitChange';
export type GitCommitDiffs = {
    aheadCount?: number;
    allChangesIncluded?: boolean;
    baseCommit?: string;
    behindCount?: number;
    changeCounts?: Record<string, number>;
    changes?: Array<GitChange>;
    commonCommit?: string;
    targetCommit?: string;
};

