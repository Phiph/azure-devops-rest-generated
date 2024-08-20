/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ShallowReference } from './ShallowReference';
/**
 * Test suite update model.
 */
export type SuiteUpdateModel = {
    /**
     * Shallow reference of default configurations for the suite.
     */
    defaultConfigurations?: Array<ShallowReference>;
    /**
     * Shallow reference of test suite.
     */
    defaultTesters?: Array<ShallowReference>;
    /**
     * Specifies if the default configurations have to be inherited from the parent test suite in which the test suite is created.
     */
    inheritDefaultConfigurations?: boolean;
    /**
     * Test suite name
     */
    name?: string;
    /**
     * Shallow reference of the parent.
     */
    parent?: ShallowReference;
    /**
     * For query based suites, the new query string.
     */
    queryString?: string;
};

