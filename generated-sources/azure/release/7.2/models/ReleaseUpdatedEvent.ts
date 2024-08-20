/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RealtimeReleaseEvent } from './RealtimeReleaseEvent';
import type { Release } from './Release';
export type ReleaseUpdatedEvent = (RealtimeReleaseEvent & {
    release?: Release;
});

