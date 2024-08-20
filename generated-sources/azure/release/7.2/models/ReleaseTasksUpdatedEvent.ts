/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RealtimeReleaseEvent } from './RealtimeReleaseEvent';
import type { ReleaseTask } from './ReleaseTask';
export type ReleaseTasksUpdatedEvent = (RealtimeReleaseEvent & {
    job?: ReleaseTask;
    planId?: string;
    releaseStepId?: number;
    tasks?: Array<ReleaseTask>;
});

