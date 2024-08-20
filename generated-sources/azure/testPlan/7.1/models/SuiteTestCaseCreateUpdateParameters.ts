/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Configuration } from './Configuration';
import type { WorkItem } from './WorkItem';
/**
 * Create and Update Suite Test Case Parameters
 */
export type SuiteTestCaseCreateUpdateParameters = {
    /**
     * Configurations Ids
     */
    pointAssignments?: Array<Configuration>;
    /**
     * Id of Test Case to be updated or created
     */
    workItem?: WorkItem;
};

