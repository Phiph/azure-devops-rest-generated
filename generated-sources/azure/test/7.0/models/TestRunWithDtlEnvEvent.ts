/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TestRunEvent } from './TestRunEvent';
export type TestRunWithDtlEnvEvent = (TestRunEvent & {
    configurationIds?: Array<number>;
    mappedTestRunEventType?: string;
    runTimeout?: string;
    testConfigurationsMapping?: string;
});

