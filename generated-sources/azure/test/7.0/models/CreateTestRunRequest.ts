/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LegacyTestCaseResult } from './LegacyTestCaseResult';
import type { LegacyTestRun } from './LegacyTestRun';
import type { LegacyTestSettings } from './LegacyTestSettings';
export type CreateTestRunRequest = {
    projectName?: string;
    results?: Array<LegacyTestCaseResult>;
    testRun?: LegacyTestRun;
    testSettings?: LegacyTestSettings;
};

