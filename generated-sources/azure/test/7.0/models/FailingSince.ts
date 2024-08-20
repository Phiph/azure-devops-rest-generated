/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BuildReference } from './BuildReference';
import type { ReleaseReference } from './ReleaseReference';
/**
 * Failing since information of a test result.
 */
export type FailingSince = {
    /**
     * Build reference since failing.
     */
    build?: BuildReference;
    /**
     * Time since failing(UTC).
     */
    date?: string;
    /**
     * Release reference since failing.
     */
    release?: ReleaseReference;
};

