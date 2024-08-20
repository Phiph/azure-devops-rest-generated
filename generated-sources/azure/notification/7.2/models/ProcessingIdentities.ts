/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NotificationDiagnosticLogMessage } from './NotificationDiagnosticLogMessage';
import type { ProcessingDiagnosticIdentity } from './ProcessingDiagnosticIdentity';
export type ProcessingIdentities = {
    excludedIdentities?: Record<string, ProcessingDiagnosticIdentity>;
    includedIdentities?: Record<string, ProcessingDiagnosticIdentity>;
    messages?: Array<NotificationDiagnosticLogMessage>;
    missingIdentities?: Array<string>;
    properties?: Record<string, string>;
};

