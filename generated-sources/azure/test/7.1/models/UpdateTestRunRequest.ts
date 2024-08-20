/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LegacyTestRun } from './LegacyTestRun';
import type { TestResultAttachment } from './TestResultAttachment';
import type { TestResultAttachmentIdentity } from './TestResultAttachmentIdentity';
export type UpdateTestRunRequest = {
    attachmentsToAdd?: Array<TestResultAttachment>;
    attachmentsToDelete?: Array<TestResultAttachmentIdentity>;
    projectName?: string;
    shouldHyderate?: boolean;
    testRun?: LegacyTestRun;
};

