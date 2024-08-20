/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IdentityRef } from './IdentityRef';
/**
 * Model to update test point.
 */
export type PointUpdateModel = {
    /**
     * Outcome to update.
     */
    outcome?: string;
    /**
     * Reset test point to active.
     */
    resetToActive?: boolean;
    /**
     * Tester to update. Type IdentityRef.
     */
    tester?: IdentityRef;
};

