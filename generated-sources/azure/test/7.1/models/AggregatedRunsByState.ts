/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AggregatedResultsByOutcome } from './AggregatedResultsByOutcome';
export type AggregatedRunsByState = {
    resultsByOutcome?: Record<string, AggregatedResultsByOutcome>;
    runsCount?: number;
    state?: 'unspecified' | 'notStarted' | 'inProgress' | 'completed' | 'aborted' | 'waiting' | 'needsInvestigation';
};

