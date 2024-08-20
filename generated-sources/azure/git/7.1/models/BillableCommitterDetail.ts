/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BillableCommitter } from './BillableCommitter';
export type BillableCommitterDetail = (BillableCommitter & {
    /**
     * ID (SHA-1) of the commit.
     */
    commitId?: string;
    /**
     * Committer email address after parsing.
     */
    committerEmail?: string;
    /**
     * Time reported by the commit.
     */
    commitTime?: string;
    /**
     * Project Id commit was pushed to.
     */
    projectId?: string;
    /**
     * Project name commit was pushed to.
     */
    projectName?: string;
    /**
     * Time of the push that contained the commit.
     */
    pushedTime?: string;
    /**
     * Push Id that contained the commit.
     */
    pushId?: number;
    /**
     * Repository name commit was pushed to.
     */
    repoName?: string;
});

