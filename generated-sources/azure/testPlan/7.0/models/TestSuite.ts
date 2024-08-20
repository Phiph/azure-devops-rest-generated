/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IdentityRef } from './IdentityRef';
import type { ReferenceLinks } from './ReferenceLinks';
import type { TeamProjectReference } from './TeamProjectReference';
import type { TestPlanReference } from './TestPlanReference';
import type { TestSuiteCreateParams } from './TestSuiteCreateParams';
/**
 * Test suite
 */
export type TestSuite = (TestSuiteCreateParams & {
    /**
     * Links: self, testPoints, testCases, parent
     */
    _links?: ReferenceLinks;
    /**
     * Child test suites of current test suite.
     */
    children?: Array<TestSuite>;
    /**
     * Boolean value dictating if Child test suites are present
     */
    hasChildren?: boolean;
    /**
     * Id of test suite.
     */
    id?: number;
    /**
     * Last error for test suite.
     */
    lastError?: string;
    /**
     * Last populated date.
     */
    lastPopulatedDate?: string;
    /**
     * IdentityRef of user who has updated test suite recently.
     */
    lastUpdatedBy?: IdentityRef;
    /**
     * Last update date.
     */
    lastUpdatedDate?: string;
    /**
     * Test plan to which the test suite belongs.
     */
    plan?: TestPlanReference;
    /**
     * Test suite project shallow reference.
     */
    project?: TeamProjectReference;
    /**
     * Test suite revision.
     */
    revision?: number;
});

