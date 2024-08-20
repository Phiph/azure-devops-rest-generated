/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TestActionResultModel } from './TestActionResultModel';
import type { TestCaseResultAttachmentModel } from './TestCaseResultAttachmentModel';
import type { TestResultParameterModel } from './TestResultParameterModel';
/**
 * Represents a test iteration result.
 */
export type TestIterationDetailsModel = {
    /**
     * Test step results in an iteration.
     */
    actionResults?: Array<TestActionResultModel>;
    /**
     * Reference to attachments in test iteration result.
     */
    attachments?: Array<TestCaseResultAttachmentModel>;
    /**
     * Comment in test iteration result.
     */
    comment?: string;
    /**
     * Time when execution completed(UTC).
     */
    completedDate?: string;
    /**
     * Duration of execution.
     */
    durationInMs?: number;
    /**
     * Error message in test iteration result execution.
     */
    errorMessage?: string;
    /**
     * ID of test iteration result.
     */
    id?: number;
    /**
     * Test outcome if test iteration result.
     */
    outcome?: string;
    /**
     * Test parameters in an iteration.
     */
    parameters?: Array<TestResultParameterModel>;
    /**
     * Time when execution started(UTC).
     */
    startedDate?: string;
    /**
     * Url to test iteration result.
     */
    url?: string;
};

