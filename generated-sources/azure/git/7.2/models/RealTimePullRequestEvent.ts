/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Base contract for a real time pull request event (SignalR)
 */
export type RealTimePullRequestEvent = {
    /**
     * The id of this event. Can be used to track send/receive state between client and server.
     */
    eventId?: string;
    /**
     * The id of the pull request this event was generated for.
     */
    pullRequestId?: number;
};

