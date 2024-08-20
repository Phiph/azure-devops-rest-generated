/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IdentityRef } from './IdentityRef';
/**
 * Data for a single approval step history.
 */
export type ApprovalStepHistory = {
    /**
     * Identity who was assigned this approval
     */
    assignedTo?: IdentityRef;
    /**
     * Comment associated with this step history.
     */
    comment?: string;
    /**
     * Identity by which this step history was created.
     */
    createdBy?: IdentityRef;
    /**
     * Timestamp at which this step history was created.
     */
    createdOn?: string;
};

