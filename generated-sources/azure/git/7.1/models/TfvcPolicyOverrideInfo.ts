/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TfvcPolicyFailureInfo } from './TfvcPolicyFailureInfo';
/**
 * Information on the policy override.
 */
export type TfvcPolicyOverrideInfo = {
    /**
     * Overidden policy comment.
     */
    comment?: string;
    /**
     * Information on the failed policy that was overridden.
     */
    policyFailures?: Array<TfvcPolicyFailureInfo>;
};

