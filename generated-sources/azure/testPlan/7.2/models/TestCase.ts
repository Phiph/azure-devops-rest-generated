/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PointAssignment } from './PointAssignment';
import type { ReferenceLinks } from './ReferenceLinks';
import type { TeamProjectReference } from './TeamProjectReference';
import type { TestPlanReference } from './TestPlanReference';
import type { TestSuiteReference } from './TestSuiteReference';
import type { WorkItemDetails } from './WorkItemDetails';
/**
 * Test Case Class
 */
export type TestCase = {
    /**
     * Reference links
     */
    links?: ReferenceLinks;
    /**
     * Order of the TestCase in the Suite
     */
    order?: number;
    /**
     * List of Points associated with the Test Case
     */
    pointAssignments?: Array<PointAssignment>;
    /**
     * Project under which the Test Case is
     */
    project?: TeamProjectReference;
    /**
     * Test Plan under which the Test Case is
     */
    testPlan?: TestPlanReference;
    /**
     * Test Suite under which the Test Case is
     */
    testSuite?: TestSuiteReference;
    /**
     * Work Item details of the TestCase
     */
    workItem?: WorkItemDetails;
};

