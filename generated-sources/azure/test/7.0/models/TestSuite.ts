/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IdentityRef } from './IdentityRef';
import type { ShallowReference } from './ShallowReference';
/**
 * Test suite
 */
export type TestSuite = {
    /**
     * Area uri of the test suite.
     */
    areaUri?: string;
    /**
     * Child test suites of current test suite.
     */
    children?: Array<TestSuite>;
    /**
     * Test suite default configuration.
     */
    defaultConfigurations?: Array<ShallowReference>;
    /**
     * Test suite default testers.
     */
    defaultTesters?: Array<ShallowReference>;
    /**
     * Id of test suite.
     */
    id?: number;
    /**
     * Default configuration was inherited or not.
     */
    inheritDefaultConfigurations?: boolean;
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
     * Name of test suite.
     */
    name?: string;
    /**
     * Test suite parent shallow reference.
     */
    parent?: ShallowReference;
    /**
     * Test plan to which the test suite belongs.
     */
    plan?: ShallowReference;
    /**
     * Test suite project shallow reference.
     */
    project?: ShallowReference;
    /**
     * Test suite query string, for dynamic suites.
     */
    queryString?: string;
    /**
     * Test suite requirement id.
     */
    requirementId?: number;
    /**
     * Test suite revision.
     */
    revision?: number;
    /**
     * State of test suite.
     */
    state?: string;
    /**
     * List of shallow reference of suites.
     */
    suites?: Array<ShallowReference>;
    /**
     * Test suite type.
     */
    suiteType?: string;
    /**
     * Test cases count.
     */
    testCaseCount?: number;
    /**
     * Test case url.
     */
    testCasesUrl?: string;
    /**
     * Used in tree view. If test suite is root suite then, it is name of plan otherwise title of the suite.
     */
    text?: string;
    /**
     * Url of test suite.
     */
    url?: string;
};

