/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Configuration } from './Configuration';
import type { IdentityRef } from './IdentityRef';
/**
 * Assignments for the Test Point
 */
export type PointAssignment = (Configuration & {
    /**
     * Name of the Configuration Assigned to the Test Point
     */
    configurationName?: string;
    /**
     * Id of the Test Point
     */
    id?: number;
    /**
     * Tester Assigned to the Test Point
     */
    tester?: IdentityRef;
});

