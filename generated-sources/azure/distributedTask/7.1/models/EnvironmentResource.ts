/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EnvironmentReference } from './EnvironmentReference';
import type { IdentityRef } from './IdentityRef';
export type EnvironmentResource = {
    createdBy?: IdentityRef;
    createdOn?: string;
    environmentReference?: EnvironmentReference;
    id?: number;
    lastModifiedBy?: IdentityRef;
    lastModifiedOn?: string;
    name?: string;
    /**
     * Tags of the Environment Resource.
     */
    tags?: Array<string>;
    /**
     * Environment resource type
     */
    type?: 'undefined' | 'generic' | 'virtualMachine' | 'kubernetes';
};

