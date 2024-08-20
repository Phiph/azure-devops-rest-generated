/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Layout } from './Layout';
import type { SessionSourcePipeline } from './SessionSourcePipeline';
import type { Source } from './Source';
import type { Timeline } from './Timeline';
/**
 * The TestResultSession is a higher-level container for test results by encapsulating multiple TestRun objects
 */
export type TestResultsSession = {
    /**
     * TestResultsSession end time
     */
    endTimeUTC?: string;
    /**
     * Id of TestResultsSession
     */
    id?: number;
    /**
     * TestResultsSession layout
     */
    layout?: Array<Layout>;
    /**
     * TestResultsSession name
     */
    name?: string;
    /**
     * TestResultsSession result
     */
    result?: 'none' | 'passed' | 'failed';
    /**
     * TestResultsSession source pipeline details
     */
    sessionSourcePipeline?: SessionSourcePipeline;
    /**
     * TestResultsSession source
     */
    source?: Source;
    /**
     * TestResultsSession start time
     */
    startTimeUTC?: string;
    /**
     * TestResultsSession state
     */
    state?: 'none' | 'running' | 'completed' | 'waiting' | 'cancelled';
    /**
     * List of test run ids
     */
    testRuns?: Array<number>;
    /**
     * TestResultsSession timeline
     */
    timeline?: Array<Timeline>;
    /**
     * TestResultsSession type
     */
    type?: string;
    /**
     * TestResultsSession Uid
     */
    uid?: string;
};

