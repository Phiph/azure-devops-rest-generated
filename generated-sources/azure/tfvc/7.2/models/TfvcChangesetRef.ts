/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IdentityRef } from './IdentityRef';
import type { ReferenceLinks } from './ReferenceLinks';
/**
 * Metadata for a changeset.
 */
export type TfvcChangesetRef = {
    /**
     * A collection of REST reference links.
     */
    _links?: ReferenceLinks;
    /**
     * Alias or display name of user.
     */
    author?: IdentityRef;
    /**
     * Changeset Id.
     */
    changesetId?: number;
    /**
     * Alias or display name of user.
     */
    checkedInBy?: IdentityRef;
    /**
     * Comment for the changeset.
     */
    comment?: string;
    /**
     * Was the Comment result truncated?
     */
    commentTruncated?: boolean;
    /**
     * Creation date of the changeset.
     */
    createdDate?: string;
    /**
     * URL to retrieve the item.
     */
    url?: string;
};

