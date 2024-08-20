/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CommentIterationContext } from './CommentIterationContext';
import type { CommentTrackingCriteria } from './CommentTrackingCriteria';
/**
 * Comment thread context contains details about what diffs were being viewed at the time of thread creation and whether or not the thread has been tracked from that original diff.
 */
export type GitPullRequestCommentThreadContext = {
    /**
     * Used to track a comment across iterations. This value can be found by looking at the iteration's changes list. Must be set for pull requests with iteration support. Otherwise, it's not required for 'legacy' pull requests.
     */
    changeTrackingId?: number;
    /**
     * The iteration context being viewed when the thread was created.
     */
    iterationContext?: CommentIterationContext;
    /**
     * The criteria used to track this thread. If this property is filled out when the thread is returned, then the thread has been tracked from its original location using the given criteria.
     */
    trackingCriteria?: CommentTrackingCriteria;
};

