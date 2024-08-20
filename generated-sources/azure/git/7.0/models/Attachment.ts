/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IdentityRef } from './IdentityRef';
import type { PropertiesCollection } from './PropertiesCollection';
import type { ReferenceLinks } from './ReferenceLinks';
/**
 * Meta data for a file attached to an artifact.
 */
export type Attachment = {
    /**
     * Links to other related objects.
     */
    _links?: ReferenceLinks;
    /**
     * The person that uploaded this attachment.
     */
    author?: IdentityRef;
    /**
     * Content hash of on-disk representation of file content. Its calculated by the server by using SHA1 hash function.
     */
    contentHash?: string;
    /**
     * The time the attachment was uploaded.
     */
    createdDate?: string;
    /**
     * The description of the attachment.
     */
    description?: string;
    /**
     * The display name of the attachment. Can't be null or empty.
     */
    displayName?: string;
    /**
     * Id of the attachment.
     */
    id?: number;
    /**
     * Extended properties.
     */
    properties?: PropertiesCollection;
    /**
     * The url to download the content of the attachment.
     */
    url?: string;
};

