/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Pull requests can be searched for matching this criteria.
 */
export type GitPullRequestSearchCriteria = {
    /**
     * If set, search for pull requests that were created by this identity.
     */
    creatorId?: string;
    /**
     * Whether to include the _links field on the shallow references
     */
    includeLinks?: boolean;
    /**
     * If set, search for pull requests whose target branch is in this repository.
     */
    repositoryId?: string;
    /**
     * If set, search for pull requests that have this identity as a reviewer.
     */
    reviewerId?: string;
    /**
     * If set, search for pull requests from this branch.
     */
    sourceRefName?: string;
    /**
     * If set, search for pull requests whose source branch is in this repository.
     */
    sourceRepositoryId?: string;
    /**
     * If set, search for pull requests that are in this state. Defaults to Active if unset.
     */
    status?: 'notSet' | 'active' | 'abandoned' | 'completed' | 'all';
    /**
     * If set, search for pull requests into this branch.
     */
    targetRefName?: string;
};

