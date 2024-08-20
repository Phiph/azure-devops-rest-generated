/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FlakySettings } from './FlakySettings';
import type { NewTestResultLoggingSettings } from './NewTestResultLoggingSettings';
export type TestResultsSettings = {
    /**
     * IsRequired and EmitDefaultValue are passed as false as if users doesn't pass anything, should not come for serialisation and deserialisation.
     */
    flakySettings?: FlakySettings;
    newTestResultLoggingSettings?: NewTestResultLoggingSettings;
};

