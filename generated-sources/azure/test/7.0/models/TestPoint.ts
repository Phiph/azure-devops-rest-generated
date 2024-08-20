/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IdentityRef } from './IdentityRef';
import type { LastResultDetails } from './LastResultDetails';
import type { ShallowReference } from './ShallowReference';
import type { WorkItemReference } from './WorkItemReference';
/**
 * Test point.
 */
export type TestPoint = {
    /**
     * AssignedTo. Type IdentityRef.
     */
    assignedTo?: IdentityRef;
    /**
     * Automated.
     */
    automated?: boolean;
    /**
     * Comment associated with test point.
     */
    comment?: string;
    /**
     * Configuration. Type ShallowReference.
     */
    configuration?: ShallowReference;
    /**
     * Failure type of test point.
     */
    failureType?: string;
    /**
     * ID of the test point.
     */
    id?: number;
    /**
     * Last date when test point was reset to Active.
     */
    lastResetToActive?: string;
    /**
     * Last resolution state id of test point.
     */
    lastResolutionStateId?: number;
    /**
     * Last result of test point. Type ShallowReference.
     */
    lastResult?: ShallowReference;
    /**
     * Last result details of test point. Type LastResultDetails.
     */
    lastResultDetails?: LastResultDetails;
    /**
     * Last result state of test point.
     */
    lastResultState?: string;
    /**
     * LastRun build number of test point.
     */
    lastRunBuildNumber?: string;
    /**
     * Last testRun of test point. Type ShallowReference.
     */
    lastTestRun?: ShallowReference;
    /**
     * Test point last updated by. Type IdentityRef.
     */
    lastUpdatedBy?: IdentityRef;
    /**
     * Last updated date of test point.
     */
    lastUpdatedDate?: string;
    /**
     * Outcome of test point.
     */
    outcome?: string;
    /**
     * Revision number.
     */
    revision?: number;
    /**
     * State of test point.
     */
    state?: string;
    /**
     * Suite of test point. Type ShallowReference.
     */
    suite?: ShallowReference;
    /**
     * TestCase associated to test point. Type WorkItemReference.
     */
    testCase?: WorkItemReference;
    /**
     * TestPlan of test point. Type ShallowReference.
     */
    testPlan?: ShallowReference;
    /**
     * Test point Url.
     */
    url?: string;
    /**
     * Work item properties of test point.
     */
    workItemProperties?: Array<any>;
};

