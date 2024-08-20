/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Test Log Reference object
 */
export type TestLogReference = {
    /**
     * BuildId for test log, if context is build
     */
    buildId?: number;
    /**
     * FileName for log file
     */
    filePath?: string;
    /**
     * ReleaseEnvId for test log, if context is Release
     */
    releaseEnvId?: number;
    /**
     * ReleaseId for test log, if context is Release
     */
    releaseId?: number;
    /**
     * Resultid for test log, if context is run and log is related to result
     */
    resultId?: number;
    /**
     * runid for test log, if context is run
     */
    runId?: number;
    /**
     * Test Log Scope
     */
    scope?: 'run';
    /**
     * SubResultid for test log, if context is run and log is related to subresult
     */
    subResultId?: number;
    /**
     * Log Type
     */
    type?: 'generalAttachment';
};

