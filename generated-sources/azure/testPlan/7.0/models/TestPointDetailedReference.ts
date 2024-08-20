/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IdentityRef } from './IdentityRef';
import type { TestConfigurationReference } from './TestConfigurationReference';
import type { TestPlanReference } from './TestPlanReference';
import type { TestSuiteReference } from './TestSuiteReference';
export type TestPointDetailedReference = {
    configuration?: TestConfigurationReference;
    plan?: TestPlanReference;
    pointId?: number;
    suite?: TestSuiteReference;
    tester?: IdentityRef;
};

