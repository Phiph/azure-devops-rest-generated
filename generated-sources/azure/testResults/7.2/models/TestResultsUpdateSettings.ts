/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FlakySettings } from './FlakySettings';
import type { NewTestResultLoggingSettings } from './NewTestResultLoggingSettings';
export type TestResultsUpdateSettings = {
    /**
     * FlakySettings defines Flaky Settings Data.
     */
    flakySettings?: FlakySettings;
    /**
     * NewTestResultLoggingSettings defines the setting for logging new test results
     */
    newTestResultLoggingSettings?: NewTestResultLoggingSettings;
};

