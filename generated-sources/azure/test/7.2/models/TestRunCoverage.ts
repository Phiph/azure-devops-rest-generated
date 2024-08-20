/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ModuleCoverage } from './ModuleCoverage';
import type { ShallowReference } from './ShallowReference';
/**
 * Test Run Code Coverage Details
 */
export type TestRunCoverage = {
    /**
     * Last Error
     */
    lastError?: string;
    /**
     * List of Modules Coverage
     */
    modules?: Array<ModuleCoverage>;
    /**
     * State
     */
    state?: string;
    /**
     * Reference of test Run.
     */
    testRun?: ShallowReference;
};

