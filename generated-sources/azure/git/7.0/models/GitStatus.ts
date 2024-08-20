/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GitStatusContext } from './GitStatusContext';
import type { IdentityRef } from './IdentityRef';
import type { ReferenceLinks } from './ReferenceLinks';
/**
 * This class contains the metadata of a service/extension posting a status.
 */
export type GitStatus = {
    /**
     * Reference links.
     */
    _links?: ReferenceLinks;
    /**
     * Context of the status.
     */
    context?: GitStatusContext;
    /**
     * Identity that created the status.
     */
    createdBy?: IdentityRef;
    /**
     * Creation date and time of the status.
     */
    creationDate?: string;
    /**
     * Status description. Typically describes current state of the status.
     */
    description?: string;
    /**
     * Status identifier.
     */
    id?: number;
    /**
     * State of the status.
     */
    state?: 'notSet' | 'pending' | 'succeeded' | 'failed' | 'error' | 'notApplicable';
    /**
     * URL with status details.
     */
    targetUrl?: string;
    /**
     * Last update date and time of the status.
     */
    updatedDate?: string;
};

