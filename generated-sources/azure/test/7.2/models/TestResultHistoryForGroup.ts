/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TestCaseResult } from './TestCaseResult';
/**
 * List of test results filtered on the basis of GroupByValue
 */
export type TestResultHistoryForGroup = {
    /**
     * Display name of the group.
     */
    displayName?: string;
    /**
     * Name or Id of the group identifier by which results are grouped together.
     */
    groupByValue?: string;
    /**
     * List of results for GroupByValue
     */
    results?: Array<TestCaseResult>;
};

