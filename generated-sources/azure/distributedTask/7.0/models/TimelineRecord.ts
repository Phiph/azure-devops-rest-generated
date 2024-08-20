/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Issue } from './Issue';
import type { JObject } from './JObject';
import type { TaskLogReference } from './TaskLogReference';
import type { TaskReference } from './TaskReference';
import type { TimelineAttempt } from './TimelineAttempt';
import type { TimelineReference } from './TimelineReference';
import type { VariableValue } from './VariableValue';
export type TimelineRecord = {
    agentSpecification?: JObject;
    attempt?: number;
    changeId?: number;
    currentOperation?: string;
    details?: TimelineReference;
    errorCount?: number;
    finishTime?: string;
    id?: string;
    identifier?: string;
    issues?: Array<Issue>;
    lastModified?: string;
    location?: string;
    log?: TaskLogReference;
    name?: string;
    order?: number;
    parentId?: string;
    percentComplete?: number;
    previousAttempts?: Array<TimelineAttempt>;
    queueId?: number;
    refName?: string;
    result?: 'succeeded' | 'succeededWithIssues' | 'failed' | 'canceled' | 'skipped' | 'abandoned';
    resultCode?: string;
    startTime?: string;
    state?: 'pending' | 'inProgress' | 'completed';
    task?: TaskReference;
    type?: string;
    variables?: Record<string, VariableValue>;
    warningCount?: number;
    workerName?: string;
};

