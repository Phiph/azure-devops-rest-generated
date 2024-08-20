/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FailingSince } from './FailingSince';
import type { LegacyBuildConfiguration } from './LegacyBuildConfiguration';
import type { LegacyReleaseReference } from './LegacyReleaseReference';
import type { LegacyTestCaseResultIdentifier } from './LegacyTestCaseResultIdentifier';
import type { TestExtensionField } from './TestExtensionField';
export type LegacyTestCaseResult = {
    afnStripId?: number;
    areaId?: number;
    areaUri?: string;
    automatedTestId?: string;
    automatedTestName?: string;
    automatedTestStorage?: string;
    automatedTestType?: string;
    automatedTestTypeId?: string;
    buildNumber?: string;
    buildReference?: LegacyBuildConfiguration;
    comment?: string;
    computerName?: string;
    configurationId?: number;
    configurationName?: string;
    creationDate?: string;
    customFields?: Array<TestExtensionField>;
    dateCompleted?: string;
    dateStarted?: string;
    duration?: number;
    errorMessage?: string;
    failingSince?: FailingSince;
    failureType?: string;
    id?: LegacyTestCaseResultIdentifier;
    isRerun?: boolean;
    lastUpdated?: string;
    lastUpdatedBy?: string;
    lastUpdatedByName?: string;
    outcome?: string;
    owner?: string;
    ownerName?: string;
    priority?: string;
    releaseReference?: LegacyReleaseReference;
    resetCount?: number;
    resolutionStateId?: number;
    resultGroupType?: 'none' | 'rerun' | 'dataDriven' | 'orderedTest' | 'generic';
    revision?: number;
    runBy?: string;
    runByName?: string;
    sequenceId?: number;
    stackTrace?: TestExtensionField;
    state?: string;
    subResultCount?: number;
    suiteName?: string;
    testCaseArea?: string;
    testCaseAreaUri?: string;
    testCaseId?: number;
    testCaseReferenceId?: number;
    testCaseRevision?: number;
    testCaseTitle?: string;
    testPlanId?: number;
    testPointId?: number;
    testResultId?: number;
    testRunId?: number;
    testRunTitle?: string;
    testSuiteId?: number;
};

