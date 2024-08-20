/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PermissionEvaluation } from './PermissionEvaluation';
/**
 * Represents a set of evaluated permissions.
 */
export type PermissionEvaluationBatch = {
    /**
     * True if members of the Administrators group should always pass the security check.
     */
    alwaysAllowAdministrators?: boolean;
    /**
     * Array of permission evaluations to evaluate.
     */
    evaluations?: Array<PermissionEvaluation>;
};

