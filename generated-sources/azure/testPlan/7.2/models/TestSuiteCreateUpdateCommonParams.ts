/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IdentityRef } from './IdentityRef';
import type { TestConfigurationReference } from './TestConfigurationReference';
import type { TestSuiteReference } from './TestSuiteReference';
/**
 * Test Suite Create/Update Common Parameters
 */
export type TestSuiteCreateUpdateCommonParams = {
    /**
     * Test suite default configurations.
     */
    defaultConfigurations?: Array<TestConfigurationReference>;
    /**
     * Test suite default testers.
     */
    defaultTesters?: Array<IdentityRef>;
    /**
     * Default configuration was inherited or not.
     */
    inheritDefaultConfigurations?: boolean;
    /**
     * Name of test suite.
     */
    name?: string;
    /**
     * Test suite parent shallow reference.
     */
    parentSuite?: TestSuiteReference;
    /**
     * Test suite query string, for dynamic suites.
     */
    queryString?: string;
};

