/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CommentThread } from './CommentThread';
import type { GitPullRequestCommentThreadContext } from './GitPullRequestCommentThreadContext';
/**
 * Represents a comment thread of a pull request. A thread contains meta data about the file it was left on (if any) along with one or more comments (an initial comment and the subsequent replies).
 */
export type GitPullRequestCommentThread = (CommentThread & {
    /**
     * Extended context information unique to pull requests
     */
    pullRequestThreadContext?: GitPullRequestCommentThreadContext;
});

