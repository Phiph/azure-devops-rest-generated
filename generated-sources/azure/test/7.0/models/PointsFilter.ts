/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IdentityRef } from './IdentityRef';
/**
 * Filter class for test point.
 */
export type PointsFilter = {
    /**
     * List of Configurations for filtering.
     */
    configurationNames?: Array<string>;
    /**
     * List of test case id for filtering.
     */
    testcaseIds?: Array<number>;
    /**
     * List of tester for filtering.
     */
    testers?: Array<IdentityRef>;
};

