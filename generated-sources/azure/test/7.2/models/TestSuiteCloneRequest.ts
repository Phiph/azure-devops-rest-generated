/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CloneOptions } from './CloneOptions';
/**
 * Test suite clone request
 */
export type TestSuiteCloneRequest = {
    /**
     * Clone options for cloning the test suite.
     */
    cloneOptions?: CloneOptions;
    /**
     * Suite id under which, we have to clone the suite.
     */
    destinationSuiteId?: number;
    /**
     * Destination suite project name.
     */
    destinationSuiteProjectName?: string;
};

