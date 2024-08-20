/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GitCommitRef } from './GitCommitRef';
import type { GitForkRef } from './GitForkRef';
import type { GitPullRequestCompletionOptions } from './GitPullRequestCompletionOptions';
import type { GitPullRequestMergeOptions } from './GitPullRequestMergeOptions';
import type { GitRepository } from './GitRepository';
import type { IdentityRef } from './IdentityRef';
import type { IdentityRefWithVote } from './IdentityRefWithVote';
import type { ReferenceLinks } from './ReferenceLinks';
import type { ResourceRef } from './ResourceRef';
import type { WebApiTagDefinition } from './WebApiTagDefinition';
/**
 * Represents all the data associated with a pull request.
 */
export type GitPullRequest = {
    /**
     * Links to other related objects.
     */
    _links?: ReferenceLinks;
    /**
     * A string which uniquely identifies this pull request. To generate an artifact ID for a pull request, use this template: ```vstfs:///Git/PullRequestId/{projectId}/{repositoryId}/{pullRequestId}```
     */
    artifactId?: string;
    /**
     * If set, auto-complete is enabled for this pull request and this is the identity that enabled it.
     */
    autoCompleteSetBy?: IdentityRef;
    /**
     * The user who closed the pull request.
     */
    closedBy?: IdentityRef;
    /**
     * The date when the pull request was closed (completed, abandoned, or merged externally).
     */
    closedDate?: string;
    /**
     * The code review ID of the pull request. Used internally.
     */
    codeReviewId?: number;
    /**
     * The commits contained in the pull request.
     */
    commits?: Array<GitCommitRef>;
    /**
     * Options which affect how the pull request will be merged when it is completed.
     */
    completionOptions?: GitPullRequestCompletionOptions;
    /**
     * The most recent date at which the pull request entered the queue to be completed. Used internally.
     */
    completionQueueTime?: string;
    /**
     * The identity of the user who created the pull request.
     */
    createdBy?: IdentityRef;
    /**
     * The date when the pull request was created.
     */
    creationDate?: string;
    /**
     * The description of the pull request.
     */
    description?: string;
    /**
     * If this is a PR from a fork this will contain information about its source.
     */
    forkSource?: GitForkRef;
    /**
     * Multiple mergebases warning
     */
    hasMultipleMergeBases?: boolean;
    /**
     * Draft / WIP pull request.
     */
    isDraft?: boolean;
    /**
     * The labels associated with the pull request.
     */
    labels?: Array<WebApiTagDefinition>;
    /**
     * The commit of the most recent pull request merge. If empty, the most recent merge is in progress or was unsuccessful.
     */
    lastMergeCommit?: GitCommitRef;
    /**
     * The commit at the head of the source branch at the time of the last pull request merge.
     */
    lastMergeSourceCommit?: GitCommitRef;
    /**
     * The commit at the head of the target branch at the time of the last pull request merge.
     */
    lastMergeTargetCommit?: GitCommitRef;
    /**
     * If set, pull request merge failed for this reason.
     */
    mergeFailureMessage?: string;
    /**
     * The type of failure (if any) of the pull request merge.
     */
    mergeFailureType?: 'none' | 'unknown' | 'caseSensitive' | 'objectTooLarge';
    /**
     * The ID of the job used to run the pull request merge. Used internally.
     */
    mergeId?: string;
    /**
     * Options used when the pull request merge runs. These are separate from completion options since completion happens only once and a new merge will run every time the source branch of the pull request changes.
     */
    mergeOptions?: GitPullRequestMergeOptions;
    /**
     * The current status of the pull request merge.
     */
    mergeStatus?: 'notSet' | 'queued' | 'conflicts' | 'succeeded' | 'rejectedByPolicy' | 'failure';
    /**
     * The ID of the pull request.
     */
    pullRequestId?: number;
    /**
     * Used internally.
     */
    remoteUrl?: string;
    /**
     * The repository containing the target branch of the pull request.
     */
    repository?: GitRepository;
    /**
     * A list of reviewers on the pull request along with the state of their votes.
     */
    reviewers?: Array<IdentityRefWithVote>;
    /**
     * The name of the source branch of the pull request.
     */
    sourceRefName?: string;
    /**
     * The status of the pull request.
     */
    status?: 'notSet' | 'active' | 'abandoned' | 'completed' | 'all';
    /**
     * If true, this pull request supports multiple iterations. Iteration support means individual pushes to the source branch of the pull request can be reviewed and comments left in one iteration will be tracked across future iterations.
     */
    supportsIterations?: boolean;
    /**
     * The name of the target branch of the pull request.
     */
    targetRefName?: string;
    /**
     * The title of the pull request.
     */
    title?: string;
    /**
     * Used internally.
     */
    url?: string;
    /**
     * Any work item references associated with this pull request.
     */
    workItemRefs?: Array<ResourceRef>;
};

