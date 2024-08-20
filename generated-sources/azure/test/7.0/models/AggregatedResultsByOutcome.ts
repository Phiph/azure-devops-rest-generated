/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type AggregatedResultsByOutcome = {
    count?: number;
    duration?: string;
    groupByField?: string;
    groupByValue?: any;
    outcome?: 'unspecified' | 'none' | 'passed' | 'failed' | 'inconclusive' | 'timeout' | 'aborted' | 'blocked' | 'notExecuted' | 'warning' | 'error' | 'notApplicable' | 'paused' | 'inProgress' | 'notImpacted';
    rerunResultCount?: number;
};

