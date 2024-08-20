/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EventBatch } from './EventBatch';
import type { MatcherResult } from './MatcherResult';
import type { NotificationJobDiagnosticLog } from './NotificationJobDiagnosticLog';
export type EventProcessingLog = (NotificationJobDiagnosticLog & {
    batches?: Array<EventBatch>;
    matcherResults?: Array<MatcherResult>;
});

