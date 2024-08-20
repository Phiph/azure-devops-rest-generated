/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TimelineIterationStatus } from './TimelineIterationStatus';
export type TimelineTeamIteration = {
    /**
     * The iteration CSS Node Id
     */
    cssNodeId?: string;
    /**
     * The end date of the iteration
     */
    finishDate?: string;
    /**
     * The iteration name
     */
    name?: string;
    /**
     * All the partially paged workitems in this iteration.
     */
    partiallyPagedWorkItems?: Array<Array<any>>;
    /**
     * The iteration path
     */
    path?: string;
    /**
     * The start date of the iteration
     */
    startDate?: string;
    /**
     * The status of this iteration
     */
    status?: TimelineIterationStatus;
    /**
     * The work items that have been paged in this iteration
     */
    workItems?: Array<Array<any>>;
};

