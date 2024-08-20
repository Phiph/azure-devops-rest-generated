/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApprovalConfig } from './ApprovalConfig';
/**
 * Request to create a new approval.
 */
export type ApprovalRequest = {
    /**
     * Unique identifier with which the approval is to be registered.
     */
    approvalId?: string;
    /**
     * Configuration of the approval request.
     */
    config?: ApprovalConfig;
};

