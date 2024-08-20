/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DiagnosticIdentity } from './DiagnosticIdentity';
import type { ProcessedEvent } from './ProcessedEvent';
import type { ProcessingIdentities } from './ProcessingIdentities';
import type { SubscriptionTraceDiagnosticLog } from './SubscriptionTraceDiagnosticLog';
export type SubscriptionTraceEventProcessingLog = (SubscriptionTraceDiagnosticLog & {
    channel?: string;
    evaluationIdentities?: ProcessingIdentities;
    /**
     * Which members opted out from receiving notifications from this subscription
     */
    optedOut?: Array<DiagnosticIdentity>;
    processedEvents?: Record<string, ProcessedEvent>;
});

