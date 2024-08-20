/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GraphSubject } from './GraphSubject';
export type GraphMember = (GraphSubject & {
    /**
     * This represents the name of the container of origin for a graph member. (For MSA this is "Windows Live ID", for AD the name of the domain, for AAD the tenantID of the directory, for VSTS groups the ScopeId, etc)
     */
    domain?: string;
    /**
     * The email address of record for a given graph member. This may be different than the principal name.
     */
    mailAddress?: string;
    /**
     * This is the PrincipalName of this graph member from the source provider. The source provider may change this field over time and it is not guaranteed to be immutable for the life of the graph member by VSTS.
     */
    principalName?: string;
});

