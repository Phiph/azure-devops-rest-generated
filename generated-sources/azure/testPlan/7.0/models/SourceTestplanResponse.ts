/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TeamProjectReference } from './TeamProjectReference';
import type { TestPlanReference } from './TestPlanReference';
/**
 * Source Test Plan Response for Test Plan clone operation
 */
export type SourceTestplanResponse = (TestPlanReference & {
    /**
     * project reference
     */
    project?: TeamProjectReference;
    /**
     * Id of suites to be cloned inside source Test Plan
     */
    suiteIds?: Array<number>;
});

