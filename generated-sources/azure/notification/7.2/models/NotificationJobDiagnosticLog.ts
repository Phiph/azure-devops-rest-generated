/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { int32 } from './int32';
import type { NotificationDiagnosticLog } from './NotificationDiagnosticLog';
export type NotificationJobDiagnosticLog = (NotificationDiagnosticLog & {
    result?: string;
    stats?: Record<string, Record<string, int32>>;
});

