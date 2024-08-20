/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TestTag } from './TestTag';
/**
 * Test tag summary for build or release grouped by test run.
 */
export type TestTagSummary = {
    /**
     * Dictionary which contains tags associated with a test run.
     */
    tagsGroupByTestArtifact?: Record<string, Array<TestTag>>;
};

