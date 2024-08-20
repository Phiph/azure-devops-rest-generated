/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProjectReference } from './ProjectReference';
import type { Release } from './Release';
import type { ReleaseEvent } from './ReleaseEvent';
export type ReleaseAbandonedEvent = (ReleaseEvent & {
    project?: ProjectReference;
    release?: Release;
});

