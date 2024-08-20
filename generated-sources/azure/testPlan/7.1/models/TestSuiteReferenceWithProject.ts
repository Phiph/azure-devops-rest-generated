/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TeamProjectReference } from './TeamProjectReference';
import type { TestSuiteReference } from './TestSuiteReference';
/**
 * Test Suite Reference with Project
 */
export type TestSuiteReferenceWithProject = (TestSuiteReference & {
    /**
     * Reference of destination Project
     */
    project?: TeamProjectReference;
});

