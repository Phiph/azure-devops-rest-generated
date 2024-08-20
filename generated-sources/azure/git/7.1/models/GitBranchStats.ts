/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GitCommitRef } from './GitCommitRef';
/**
 * Ahead and behind counts for a particular ref.
 */
export type GitBranchStats = {
    /**
     * Number of commits ahead.
     */
    aheadCount?: number;
    /**
     * Number of commits behind.
     */
    behindCount?: number;
    /**
     * Current commit.
     */
    commit?: GitCommitRef;
    /**
     * True if this is the result for the base version.
     */
    isBaseVersion?: boolean;
    /**
     * Name of the ref.
     */
    name?: string;
};

