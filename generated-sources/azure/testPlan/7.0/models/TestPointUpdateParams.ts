/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IdentityRef } from './IdentityRef';
import type { Results } from './Results';
/**
 * Test Point Update Parameters
 */
export type TestPointUpdateParams = {
    /**
     * Id of Test Point to be updated
     */
    id?: number;
    /**
     * Reset the Test Point to Active
     */
    isActive?: boolean;
    /**
     * Results of the test point
     */
    results?: Results;
    /**
     * Tester of the Test Point
     */
    tester?: IdentityRef;
};

