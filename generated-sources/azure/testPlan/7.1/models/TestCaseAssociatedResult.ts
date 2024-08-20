/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IdentityRef } from './IdentityRef';
import type { TestConfigurationReference } from './TestConfigurationReference';
import type { TestPlanReference } from './TestPlanReference';
import type { TestSuiteReference } from './TestSuiteReference';
export type TestCaseAssociatedResult = {
    completedDate?: string;
    configuration?: TestConfigurationReference;
    outcome?: 'inProgress' | 'blocked' | 'failed' | 'passed' | 'ready' | 'notApplicable' | 'paused' | 'timeout' | 'warning' | 'error' | 'notExecuted' | 'inconclusive' | 'aborted' | 'none' | 'notImpacted' | 'unspecified' | 'maxValue';
    plan?: TestPlanReference;
    pointId?: number;
    resultId?: number;
    runBy?: IdentityRef;
    runId?: number;
    suite?: TestSuiteReference;
    tester?: IdentityRef;
};

