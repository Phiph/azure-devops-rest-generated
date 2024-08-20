/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NotificationBatch } from './NotificationBatch';
import type { NotificationJobDiagnosticLog } from './NotificationJobDiagnosticLog';
export type NotificationDeliveryLog = (NotificationJobDiagnosticLog & {
    batches?: Array<NotificationBatch>;
});

