/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IdentityRef } from './IdentityRef';
import type { ReferenceLinks } from './ReferenceLinks';
import type { TfvcShallowBranchRef } from './TfvcShallowBranchRef';
/**
 * Metadata for a branchref.
 */
export type TfvcBranchRef = (TfvcShallowBranchRef & {
    /**
     * A collection of REST reference links.
     */
    _links?: ReferenceLinks;
    /**
     * Creation date of the branch.
     */
    createdDate?: string;
    /**
     * Branch description.
     */
    description?: string;
    /**
     * Is the branch deleted?
     */
    isDeleted?: boolean;
    /**
     * Alias or display name of user
     */
    owner?: IdentityRef;
    /**
     * URL to retrieve the item.
     */
    url?: string;
});

