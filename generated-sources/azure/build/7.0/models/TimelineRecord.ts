/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BuildLogReference } from './BuildLogReference';
import type { Issue } from './Issue';
import type { ReferenceLinks } from './ReferenceLinks';
import type { TaskReference } from './TaskReference';
import type { TimelineAttempt } from './TimelineAttempt';
import type { TimelineReference } from './TimelineReference';
/**
 * Represents an entry in a build's timeline.
 */
export type TimelineRecord = {
    _links?: ReferenceLinks;
    /**
     * Attempt number of record.
     */
    attempt?: number;
    /**
     * The change ID.
     */
    changeId?: number;
    /**
     * A string that indicates the current operation.
     */
    currentOperation?: string;
    /**
     * A reference to a sub-timeline.
     */
    details?: TimelineReference;
    /**
     * The number of errors produced by this operation.
     */
    errorCount?: number;
    /**
     * The finish time.
     */
    finishTime?: string;
    /**
     * The ID of the record.
     */
    id?: string;
    /**
     * String identifier that is consistent across attempts.
     */
    identifier?: string;
    issues?: Array<Issue>;
    /**
     * The time the record was last modified.
     */
    lastModified?: string;
    /**
     * A reference to the log produced by this operation.
     */
    log?: BuildLogReference;
    /**
     * The name.
     */
    name?: string;
    /**
     * An ordinal value relative to other records.
     */
    order?: number;
    /**
     * The ID of the record's parent.
     */
    parentId?: string;
    /**
     * The current completion percentage.
     */
    percentComplete?: number;
    previousAttempts?: Array<TimelineAttempt>;
    /**
     * The queue ID of the queue that the operation ran on.
     */
    queueId?: number;
    /**
     * The result.
     */
    result?: 'succeeded' | 'succeededWithIssues' | 'failed' | 'canceled' | 'skipped' | 'abandoned';
    /**
     * The result code.
     */
    resultCode?: string;
    /**
     * The start time.
     */
    startTime?: string;
    /**
     * The state of the record.
     */
    state?: 'pending' | 'inProgress' | 'completed';
    /**
     * A reference to the task represented by this timeline record.
     */
    task?: TaskReference;
    /**
     * The type of the record.
     */
    type?: string;
    /**
     * The REST URL of the timeline record.
     */
    url?: string;
    /**
     * The number of warnings produced by this operation.
     */
    warningCount?: number;
    /**
     * The name of the agent running the operation.
     */
    workerName?: string;
};

