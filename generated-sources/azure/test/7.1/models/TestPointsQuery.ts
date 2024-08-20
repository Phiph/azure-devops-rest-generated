/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PointsFilter } from './PointsFilter';
import type { TestPoint } from './TestPoint';
/**
 * Test point query class.
 */
export type TestPointsQuery = {
    /**
     * Order by results.
     */
    orderBy?: string;
    /**
     * List of test points
     */
    points?: Array<TestPoint>;
    /**
     * Filter
     */
    pointsFilter?: PointsFilter;
    /**
     * List of workitem fields to get.
     */
    witFields?: Array<string>;
};

