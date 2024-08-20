/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * A snapshot of build retention information. This class takes a sample at the given time. It provides information about retained builds, files associated with those retained builds, and number of files being retained.
 */
export type BuildRetentionSample = {
    /**
     * Summary of retention by build
     */
    builds?: string;
    /**
     * List of build definitions
     */
    definitions?: string;
    /**
     * Summary of files consumed by retained builds
     */
    files?: string;
    /**
     * The date and time when the sample was taken
     */
    sampleTime?: string;
};

