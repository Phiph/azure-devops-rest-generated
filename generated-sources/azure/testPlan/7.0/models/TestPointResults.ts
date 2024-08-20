/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LastResultDetails } from './LastResultDetails';
/**
 * Test Point Results
 */
export type TestPointResults = {
    /**
     * Failure Type for the Test Point
     */
    failureType?: 'none' | 'regression' | 'new_Issue' | 'known_Issue' | 'unknown' | 'null_Value' | 'maxValue';
    /**
     * Last Resolution State Id for the Test Point
     */
    lastResolutionState?: 'none' | 'needsInvestigation' | 'testIssue' | 'productIssue' | 'configurationIssue' | 'nullValue' | 'maxValue';
    /**
     * Last Result Details for the Test Point
     */
    lastResultDetails?: LastResultDetails;
    /**
     * Last Result Id
     */
    lastResultId?: number;
    /**
     * Last Result State of the Test Point
     */
    lastResultState?: 'unspecified' | 'pending' | 'queued' | 'inProgress' | 'paused' | 'completed' | 'maxValue';
    /**
     * Last RUn Build Number for the Test Point
     */
    lastRunBuildNumber?: string;
    /**
     * Last Test Run Id for the Test Point
     */
    lastTestRunId?: number;
    /**
     * Outcome of the Test Point
     */
    outcome?: 'unspecified' | 'none' | 'passed' | 'failed' | 'inconclusive' | 'timeout' | 'aborted' | 'blocked' | 'notExecuted' | 'warning' | 'error' | 'notApplicable' | 'paused' | 'inProgress' | 'notImpacted' | 'maxValue';
    /**
     * State of the Test Point
     */
    state?: 'none' | 'ready' | 'completed' | 'notReady' | 'inProgress' | 'maxValue';
};

