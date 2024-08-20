/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TestSuiteCreateUpdateCommonParams } from './TestSuiteCreateUpdateCommonParams';
/**
 * Test suite Create Parameters
 */
export type TestSuiteCreateParams = (TestSuiteCreateUpdateCommonParams & {
    /**
     * Test suite requirement id.
     */
    requirementId?: number;
    /**
     * Test suite type.
     */
    suiteType?: 'none' | 'dynamicTestSuite' | 'staticTestSuite' | 'requirementTestSuite';
});

