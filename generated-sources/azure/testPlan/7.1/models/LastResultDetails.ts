/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IdentityRef } from './IdentityRef';
/**
 * Last result details of test point.
 */
export type LastResultDetails = {
    /**
     * Completed date of last result.
     */
    dateCompleted?: string;
    /**
     * Duration of the last result in milliseconds.
     */
    duration?: number;
    /**
     * The user who executed the last result.
     */
    runBy?: IdentityRef;
};

