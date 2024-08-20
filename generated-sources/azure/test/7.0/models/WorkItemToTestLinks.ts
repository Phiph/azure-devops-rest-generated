/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TestMethod } from './TestMethod';
import type { WorkItemReference } from './WorkItemReference';
export type WorkItemToTestLinks = {
    executedIn?: 'any' | 'tcm' | 'tfs';
    tests?: Array<TestMethod>;
    workItem?: WorkItemReference;
};

