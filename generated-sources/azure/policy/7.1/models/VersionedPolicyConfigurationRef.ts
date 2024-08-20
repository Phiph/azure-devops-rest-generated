/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PolicyConfigurationRef } from './PolicyConfigurationRef';
/**
 * A particular revision for a policy configuration.
 */
export type VersionedPolicyConfigurationRef = (PolicyConfigurationRef & {
    /**
     * The policy configuration revision ID.
     */
    revision?: number;
});

