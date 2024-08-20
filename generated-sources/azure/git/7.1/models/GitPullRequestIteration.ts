/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GitCommitRef } from './GitCommitRef';
import type { GitPullRequestChange } from './GitPullRequestChange';
import type { GitPushRef } from './GitPushRef';
import type { IdentityRef } from './IdentityRef';
import type { ReferenceLinks } from './ReferenceLinks';
/**
 * Provides properties that describe a Git pull request iteration. Iterations are created as a result of creating and pushing updates to a pull request.
 */
export type GitPullRequestIteration = {
    /**
     * A collection of related REST reference links.
     */
    _links?: ReferenceLinks;
    /**
     * Author of the pull request iteration.
     */
    author?: IdentityRef;
    /**
     * Changes included with the pull request iteration.
     */
    changeList?: Array<GitPullRequestChange>;
    /**
     * The commits included with the pull request iteration.
     */
    commits?: Array<GitCommitRef>;
    /**
     * The first common Git commit of the source and target refs.
     */
    commonRefCommit?: GitCommitRef;
    /**
     * The creation date of the pull request iteration.
     */
    createdDate?: string;
    /**
     * Description of the pull request iteration.
     */
    description?: string;
    /**
     * Indicates if the Commits property contains a truncated list of commits in this pull request iteration.
     */
    hasMoreCommits?: boolean;
    /**
     * ID of the pull request iteration. Iterations are created as a result of creating and pushing updates to a pull request.
     */
    id?: number;
    /**
     * If the iteration reason is Retarget, this is the refName of the new target
     */
    newTargetRefName?: string;
    /**
     * If the iteration reason is Retarget, this is the original target refName
     */
    oldTargetRefName?: string;
    /**
     * The Git push information associated with this pull request iteration.
     */
    push?: GitPushRef;
    /**
     * The reason for which the pull request iteration was created.
     */
    reason?: 'push' | 'forcePush' | 'create' | 'rebase' | 'unknown' | 'retarget' | 'resolveConflicts';
    /**
     * The source Git commit of this iteration.
     */
    sourceRefCommit?: GitCommitRef;
    /**
     * The target Git commit of this iteration.
     */
    targetRefCommit?: GitCommitRef;
    /**
     * The updated date of the pull request iteration.
     */
    updatedDate?: string;
};

