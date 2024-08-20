/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TestLogReference } from './TestLogReference';
/**
 * Represents Test Log Result object.
 */
export type TestLog = {
    /**
     * Test Log Context run, build
     */
    logReference?: TestLogReference;
    /**
     * Meta data for Log file
     */
    metaData?: Record<string, string>;
    /**
     * LastUpdatedDate for Log file
     */
    modifiedOn?: string;
    /**
     * Size in Bytes for Log file
     */
    size?: number;
};

