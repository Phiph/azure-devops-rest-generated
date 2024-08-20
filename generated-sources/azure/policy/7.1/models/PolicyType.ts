/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PolicyTypeRef } from './PolicyTypeRef';
import type { ReferenceLinks } from './ReferenceLinks';
/**
 * User-friendly policy type with description (used for querying policy types).
 */
export type PolicyType = (PolicyTypeRef & {
    /**
     * The links to other objects related to this object.
     */
    _links?: ReferenceLinks;
    /**
     * Detailed description of the policy type.
     */
    description?: string;
});

