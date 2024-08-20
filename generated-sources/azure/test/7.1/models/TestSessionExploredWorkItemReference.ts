/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TestSessionWorkItemReference } from './TestSessionWorkItemReference';
export type TestSessionExploredWorkItemReference = (TestSessionWorkItemReference & {
    /**
     * Workitem references of workitems filed as a part of the current workitem exploration.
     */
    associatedWorkItems?: Array<TestSessionWorkItemReference>;
    /**
     * Time when exploration of workitem ended.
     */
    endTime?: string;
    /**
     * Time when explore of workitem was started.
     */
    startTime?: string;
});

