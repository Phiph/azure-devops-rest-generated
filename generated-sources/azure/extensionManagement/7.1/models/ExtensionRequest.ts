/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IdentityRef } from './IdentityRef';
/**
 * A request for an extension (to be installed or have a license assigned)
 */
export type ExtensionRequest = {
    /**
     * Required message supplied if the request is rejected
     */
    rejectMessage?: string;
    /**
     * Date at which the request was made
     */
    requestDate?: string;
    /**
     * Represents the user who made the request
     */
    requestedBy?: IdentityRef;
    /**
     * Optional message supplied by the requester justifying the request
     */
    requestMessage?: string;
    /**
     * Represents the state of the request
     */
    requestState?: 'open' | 'accepted' | 'rejected';
    /**
     * Date at which the request was resolved
     */
    resolveDate?: string;
    /**
     * Represents the user who resolved the request
     */
    resolvedBy?: IdentityRef;
};

