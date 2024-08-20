/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RealtimeReleaseEvent } from './RealtimeReleaseEvent';
export type ReleaseTaskLogUpdatedEvent = (RealtimeReleaseEvent & {
    lines?: Array<string>;
    stepRecordId?: string;
    timelineRecordId?: string;
});

