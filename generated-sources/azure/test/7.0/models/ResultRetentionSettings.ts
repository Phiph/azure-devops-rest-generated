/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IdentityRef } from './IdentityRef';
/**
 * Test result retention settings
 */
export type ResultRetentionSettings = {
    /**
     * Automated test result retention duration in days
     */
    automatedResultsRetentionDuration?: number;
    /**
     * Last Updated by identity
     */
    lastUpdatedBy?: IdentityRef;
    /**
     * Last updated date
     */
    lastUpdatedDate?: string;
    /**
     * Manual test result retention duration in days
     */
    manualResultsRetentionDuration?: number;
};

