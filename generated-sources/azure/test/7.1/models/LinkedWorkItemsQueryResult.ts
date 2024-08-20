/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WorkItemReference } from './WorkItemReference';
export type LinkedWorkItemsQueryResult = {
    automatedTestName?: string;
    planId?: number;
    pointId?: number;
    suiteId?: number;
    testCaseId?: number;
    workItems?: Array<WorkItemReference>;
};

