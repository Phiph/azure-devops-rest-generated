/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RealTimePullRequestEvent } from './RealTimePullRequestEvent';
/**
 * Real time event (SignalR) for a completion errors on a pull request
 */
export type CompletionErrorsEvent = (RealTimePullRequestEvent & {
    /**
     * The error message associated with the completion error
     */
    errorMessage?: string;
});

