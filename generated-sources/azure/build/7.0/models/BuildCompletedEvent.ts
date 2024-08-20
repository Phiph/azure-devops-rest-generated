/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AggregatedResultsAnalysis } from './AggregatedResultsAnalysis';
import type { AssociatedWorkItem } from './AssociatedWorkItem';
import type { BuildUpdatedEvent } from './BuildUpdatedEvent';
import type { Change } from './Change';
import type { PullRequest } from './PullRequest';
import type { TimelineRecord } from './TimelineRecord';
export type BuildCompletedEvent = (BuildUpdatedEvent & {
    /**
     * Changes associated with a build used for build notifications
     */
    changes?: Array<Change>;
    /**
     * Pull request for the build used for build notifications
     */
    pullRequest?: PullRequest;
    /**
     * Test results associated with a build used for build notifications
     */
    testResults?: AggregatedResultsAnalysis;
    /**
     * Timeline records associated with a build used for build notifications
     */
    timelineRecords?: Array<TimelineRecord>;
    /**
     * Work items associated with a build used for build notifications
     */
    workItems?: Array<AssociatedWorkItem>;
});

