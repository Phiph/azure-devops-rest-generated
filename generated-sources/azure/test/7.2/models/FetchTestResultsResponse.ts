/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LegacyTestCaseResult } from './LegacyTestCaseResult';
import type { LegacyTestCaseResultIdentifier } from './LegacyTestCaseResultIdentifier';
import type { TestActionResult } from './TestActionResult';
import type { TestResultAttachment } from './TestResultAttachment';
import type { TestResultParameter } from './TestResultParameter';
export type FetchTestResultsResponse = {
    actionResults?: Array<TestActionResult>;
    attachments?: Array<TestResultAttachment>;
    deletedIds?: Array<LegacyTestCaseResultIdentifier>;
    results?: Array<LegacyTestCaseResult>;
    testParameters?: Array<TestResultParameter>;
};

