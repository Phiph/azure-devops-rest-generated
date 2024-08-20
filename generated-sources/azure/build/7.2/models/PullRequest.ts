/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IdentityRef } from './IdentityRef';
import type { ReferenceLinks } from './ReferenceLinks';
/**
 * Represents a pull request object.  These are retrieved from Source Providers.
 */
export type PullRequest = {
    /**
     * The links to other objects related to this object.
     */
    _links?: ReferenceLinks;
    /**
     * Author of the pull request.
     */
    author?: IdentityRef;
    /**
     * Current state of the pull request, e.g. open, merged, closed, conflicts, etc.
     */
    currentState?: string;
    /**
     * Description for the pull request.
     */
    description?: string;
    /**
     * Returns if pull request is draft
     */
    draft?: boolean;
    /**
     * Unique identifier for the pull request
     */
    id?: string;
    /**
     * The name of the provider this pull request is associated with.
     */
    providerName?: string;
    /**
     * Source branch ref of this pull request
     */
    sourceBranchRef?: string;
    /**
     * Owner of the source repository of this pull request
     */
    sourceRepositoryOwner?: string;
    /**
     * Target branch ref of this pull request
     */
    targetBranchRef?: string;
    /**
     * Owner of the target repository of this pull request
     */
    targetRepositoryOwner?: string;
    /**
     * Title of the pull request.
     */
    title?: string;
};

