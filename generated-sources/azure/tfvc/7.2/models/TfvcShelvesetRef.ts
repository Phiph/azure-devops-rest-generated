/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IdentityRef } from './IdentityRef';
import type { ReferenceLinks } from './ReferenceLinks';
/**
 * Metadata for a shallow shelveset.
 */
export type TfvcShelvesetRef = {
    /**
     * List of reference links for the shelveset.
     */
    _links?: ReferenceLinks;
    /**
     * Shelveset comment.
     */
    comment?: string;
    /**
     * Shelveset comment truncated as applicable.
     */
    commentTruncated?: boolean;
    /**
     * Shelveset create date.
     */
    createdDate?: string;
    /**
     * Shelveset Id.
     */
    id?: string;
    /**
     * Shelveset name.
     */
    name?: string;
    /**
     * Shelveset Owner.
     */
    owner?: IdentityRef;
    /**
     * Shelveset Url.
     */
    url?: string;
};

