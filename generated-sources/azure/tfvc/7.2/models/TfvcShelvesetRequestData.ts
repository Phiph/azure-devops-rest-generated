/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type TfvcShelvesetRequestData = {
    /**
     * Whether to include policyOverride and notes Only applies when requesting a single deep shelveset
     */
    includeDetails?: boolean;
    /**
     * Whether to include the _links field on the shallow references. Does not apply when requesting a single deep shelveset object. Links will always be included in the deep shelveset.
     */
    includeLinks?: boolean;
    /**
     * Whether to include workItems
     */
    includeWorkItems?: boolean;
    /**
     * Max number of changes to include
     */
    maxChangeCount?: number;
    /**
     * Max length of comment
     */
    maxCommentLength?: number;
    /**
     * Shelveset name
     */
    name?: string;
    /**
     * Owner's ID. Could be a name or a guid.
     */
    owner?: string;
};

