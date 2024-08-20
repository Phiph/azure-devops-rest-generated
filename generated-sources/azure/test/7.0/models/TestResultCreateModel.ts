/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CustomTestField } from './CustomTestField';
import type { IdentityRef } from './IdentityRef';
import type { ShallowReference } from './ShallowReference';
export type TestResultCreateModel = {
    area?: ShallowReference;
    associatedWorkItems?: Array<number>;
    automatedTestId?: string;
    automatedTestName?: string;
    automatedTestStorage?: string;
    automatedTestType?: string;
    automatedTestTypeId?: string;
    comment?: string;
    completedDate?: string;
    computerName?: string;
    configuration?: ShallowReference;
    customFields?: Array<CustomTestField>;
    durationInMs?: string;
    errorMessage?: string;
    failureType?: string;
    outcome?: string;
    owner?: IdentityRef;
    resolutionState?: string;
    runBy?: IdentityRef;
    stackTrace?: string;
    startedDate?: string;
    state?: string;
    testCase?: ShallowReference;
    testCasePriority?: string;
    testCaseTitle?: string;
    testPoint?: ShallowReference;
};

