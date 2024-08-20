/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LegacyTestCaseResult } from './LegacyTestCaseResult';
import type { TestActionResult } from './TestActionResult';
import type { TestResultAttachment } from './TestResultAttachment';
import type { TestResultAttachmentIdentity } from './TestResultAttachmentIdentity';
import type { TestResultParameter } from './TestResultParameter';
export type ResultUpdateRequest = {
    actionResultDeletes?: Array<TestActionResult>;
    actionResults?: Array<TestActionResult>;
    attachmentDeletes?: Array<TestResultAttachmentIdentity>;
    attachments?: Array<TestResultAttachment>;
    parameterDeletes?: Array<TestResultParameter>;
    parameters?: Array<TestResultParameter>;
    testCaseResult?: LegacyTestCaseResult;
    testResultId?: number;
    testRunId?: number;
};

