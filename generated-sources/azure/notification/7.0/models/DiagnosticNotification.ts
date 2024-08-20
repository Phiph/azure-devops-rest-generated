/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DiagnosticRecipient } from './DiagnosticRecipient';
import type { NotificationDiagnosticLogMessage } from './NotificationDiagnosticLogMessage';
export type DiagnosticNotification = {
    eventId?: number;
    eventType?: string;
    id?: number;
    messages?: Array<NotificationDiagnosticLogMessage>;
    recipients?: Record<string, DiagnosticRecipient>;
    result?: string;
    stats?: Record<string, number>;
    subscriptionId?: string;
};

