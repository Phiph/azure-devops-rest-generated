/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IdentityRef } from './IdentityRef';
import type { ReferenceLinks } from './ReferenceLinks';
import type { TeamProjectReference } from './TeamProjectReference';
import type { TestCaseReference } from './TestCaseReference';
import type { TestConfigurationReference } from './TestConfigurationReference';
import type { TestPlanReference } from './TestPlanReference';
import type { TestPointResults } from './TestPointResults';
import type { TestSuiteReference } from './TestSuiteReference';
/**
 * Test Point Class
 */
export type TestPoint = {
    /**
     * Comment associated to the Test Point
     */
    comment?: string;
    /**
     * Configuration associated with the Test Point
     */
    configuration?: TestConfigurationReference;
    /**
     * Id of the Test Point
     */
    id?: number;
    /**
     * Variable to decide whether the test case is Active or not
     */
    isActive?: boolean;
    /**
     * Is the Test Point for Automated Test Case or Manual
     */
    isAutomated?: boolean;
    /**
     * Last Reset to Active Time Stamp for the Test Point
     */
    lastResetToActive?: string;
    /**
     * Last Updated details for the Test Point
     */
    lastUpdatedBy?: IdentityRef;
    /**
     * Last Update Time Stamp for the Test Point
     */
    lastUpdatedDate?: string;
    /**
     * Reference links
     */
    links?: ReferenceLinks;
    /**
     * Project under which the Test Point is
     */
    project?: TeamProjectReference;
    /**
     * Results associated to the Test Point
     */
    results?: TestPointResults;
    /**
     * Test Case Reference
     */
    testCaseReference?: TestCaseReference;
    /**
     * Tester associated with the Test Point
     */
    tester?: IdentityRef;
    /**
     * Test Plan under which the Test Point is
     */
    testPlan?: TestPlanReference;
    /**
     * Test Suite under which the Test Point is
     */
    testSuite?: TestSuiteReference;
};

