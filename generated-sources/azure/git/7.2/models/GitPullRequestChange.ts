/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GitChange } from './GitChange';
/**
 * Change made in a pull request.
 */
export type GitPullRequestChange = (GitChange & {
    /**
     * ID used to track files through multiple changes.
     */
    changeTrackingId?: number;
});

