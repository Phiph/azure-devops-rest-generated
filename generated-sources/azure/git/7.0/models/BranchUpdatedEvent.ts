/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RealTimePullRequestEvent } from './RealTimePullRequestEvent';
/**
 * Real time event (SignalR) for a source/target branch update on a pull request
 */
export type BranchUpdatedEvent = (RealTimePullRequestEvent & {
    /**
     * If true, the source branch of the pull request was updated
     */
    isSourceUpdate?: boolean;
});

