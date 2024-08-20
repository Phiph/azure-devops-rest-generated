/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PolicyConfiguration } from './PolicyConfiguration';
export type GitPolicyConfigurationResponse = {
    /**
     * The HTTP client methods find the continuation token header in the response and populate this field.
     */
    continuationToken?: string;
    policyConfigurations?: Array<PolicyConfiguration>;
};

