/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IdentityRef } from './IdentityRef';
import type { ReferenceLinks } from './ReferenceLinks';
/**
 * Metadata for a Label.
 */
export type TfvcLabelRef = {
    /**
     * Collection of reference links.
     */
    _links?: ReferenceLinks;
    /**
     * Label description.
     */
    description?: string;
    /**
     * Label Id.
     */
    id?: number;
    /**
     * Label scope.
     */
    labelScope?: string;
    /**
     * Last modified datetime for the label.
     */
    modifiedDate?: string;
    /**
     * Label name.
     */
    name?: string;
    /**
     * Label owner.
     */
    owner?: IdentityRef;
    /**
     * Label Url.
     */
    url?: string;
};

