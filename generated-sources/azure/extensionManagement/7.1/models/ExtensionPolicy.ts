/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Policy with a set of permissions on extension operations
 */
export type ExtensionPolicy = {
    /**
     * Permissions on 'Install' operation
     */
    install?: 'none' | 'private' | 'public' | 'preview' | 'released' | 'firstParty' | 'all';
    /**
     * Permission on 'Request' operation
     */
    request?: 'none' | 'private' | 'public' | 'preview' | 'released' | 'firstParty' | 'all';
};

