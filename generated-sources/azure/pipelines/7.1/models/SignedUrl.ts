/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * A signed url allowing limited-time anonymous access to private resources.
 */
export type SignedUrl = {
    /**
     * Timestamp when access expires.
     */
    signatureExpires?: string;
    /**
     * The URL to allow access to.
     */
    url?: string;
};

