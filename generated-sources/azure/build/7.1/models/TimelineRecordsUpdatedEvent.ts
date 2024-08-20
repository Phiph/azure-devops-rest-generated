/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RealtimeBuildEvent } from './RealtimeBuildEvent';
import type { TimelineRecord } from './TimelineRecord';
export type TimelineRecordsUpdatedEvent = (RealtimeBuildEvent & {
    timelineRecords?: Array<TimelineRecord>;
});

