/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LegacyTestCaseResultIdentifier } from './LegacyTestCaseResultIdentifier';
export type TestActionResult = {
    actionPath?: string;
    comment?: string;
    creationDate?: string;
    dateCompleted?: string;
    dateStarted?: string;
    duration?: number;
    errorMessage?: string;
    id?: LegacyTestCaseResultIdentifier;
    iterationId?: number;
    lastUpdated?: string;
    lastUpdatedBy?: string;
    outcome?: string;
    sharedStepId?: number;
    sharedStepRevision?: number;
};

