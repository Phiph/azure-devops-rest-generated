/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TestCase } from './TestCase';
import type { TestPlanDetailedReference } from './TestPlanDetailedReference';
import type { TestPoint } from './TestPoint';
import type { TestSuite } from './TestSuite';
/**
 * This data model is used in TestPlansHubRefreshDataProvider and populates the data required for initial page load
 */
export type TestPlansHubRefreshData = {
    defineColumnOptionFields?: Array<string>;
    defineTabCustomColumnFieldMap?: Record<string, string>;
    errorMessage?: string;
    executeColumnOptionFields?: Array<string>;
    executeTabCustomColumnFieldMap?: Record<string, string>;
    isAdvancedExtensionEnabled?: boolean;
    selectedPivotId?: string;
    selectedSuiteId?: number;
    testCasePageSize?: number;
    testCases?: Array<TestCase>;
    testCasesContinuationToken?: string;
    testPlan?: TestPlanDetailedReference;
    testPointPageSize?: number;
    testPoints?: Array<TestPoint>;
    testPointsContinuationToken?: string;
    testSuites?: Array<TestSuite>;
    testSuitesContinuationToken?: string;
};

