/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TestPlan } from './TestPlan';
import type { TestPoint } from './TestPoint';
import type { TestSuite } from './TestSuite';
export type TestPlanHubData = {
    selectedSuiteId?: number;
    testPlan?: TestPlan;
    testPoints?: Array<TestPoint>;
    testSuites?: Array<TestSuite>;
    totalTestPoints?: number;
};

