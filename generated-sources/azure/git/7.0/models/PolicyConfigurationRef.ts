/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PolicyTypeRef } from './PolicyTypeRef';
/**
 * Policy configuration reference.
 */
export type PolicyConfigurationRef = {
    /**
     * The policy configuration ID.
     */
    id?: number;
    /**
     * The policy configuration type.
     */
    type?: PolicyTypeRef;
    /**
     * The URL where the policy configuration can be retrieved.
     */
    url?: string;
};

