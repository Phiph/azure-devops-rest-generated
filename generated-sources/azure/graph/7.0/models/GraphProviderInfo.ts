/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Who is the provider for this user and what is the identifier and domain that is used to uniquely identify the user.
 */
export type GraphProviderInfo = {
    /**
     * The descriptor is the primary way to reference the graph subject while the system is running. This field will uniquely identify the same graph subject across both Accounts and Organizations.
     */
    descriptor?: string;
    /**
     * This represents the name of the container of origin for a graph member. (For MSA this is "Windows Live ID", for AAD the tenantID of the directory.)
     */
    domain?: string;
    /**
     * The type of source provider for the origin identifier (ex: "aad", "msa")
     */
    origin?: string;
    /**
     * The unique identifier from the system of origin. (For MSA this is the PUID in hex notation, for AAD this is the object id.)
     */
    originId?: string;
};

