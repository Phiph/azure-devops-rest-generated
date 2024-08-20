/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TimelineRecord } from './TimelineRecord';
import type { TimelineReference } from './TimelineReference';
/**
 * Represents the timeline of a build.
 */
export type Timeline = (TimelineReference & {
    /**
     * The process or person that last changed the timeline.
     */
    lastChangedBy?: string;
    /**
     * The time the timeline was last changed.
     */
    lastChangedOn?: string;
    records?: Array<TimelineRecord>;
});

