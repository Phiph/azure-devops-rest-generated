/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Represents an evaluated permission.
 */
export type PermissionEvaluation = {
    /**
     * Permission bit for this evaluated permission.
     */
    permissions?: number;
    /**
     * Security namespace identifier for this evaluated permission.
     */
    securityNamespaceId?: string;
    /**
     * Security namespace-specific token for this evaluated permission.
     */
    token?: string;
    /**
     * Permission evaluation value.
     */
    value?: boolean;
};

