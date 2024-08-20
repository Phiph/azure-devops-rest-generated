/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RealtimeBuildEvent } from './RealtimeBuildEvent';
export type ConsoleLogEvent = (RealtimeBuildEvent & {
    lines?: Array<string>;
    stepRecordId?: string;
    timelineId?: string;
    timelineRecordId?: string;
});

