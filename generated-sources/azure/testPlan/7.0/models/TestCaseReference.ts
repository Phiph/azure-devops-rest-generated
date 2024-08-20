/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IdentityRef } from './IdentityRef';
/**
 * Test Case Reference
 */
export type TestCaseReference = {
    /**
     * Identity to whom the test case is assigned
     */
    assignedTo?: IdentityRef;
    /**
     * Test Case Id
     */
    id?: number;
    /**
     * Test Case Name
     */
    name?: string;
    /**
     * State of the test case work item
     */
    state?: string;
};

