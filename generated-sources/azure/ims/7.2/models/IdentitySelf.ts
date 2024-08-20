/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TenantInfo } from './TenantInfo';
/**
 * Identity information.
 */
export type IdentitySelf = {
    /**
     * The UserPrincipalName (UPN) of the account. This value comes from the source provider.
     */
    accountName?: string;
    /**
     * The display name. For AAD accounts with multiple tenants this is the display name of the profile in the home tenant.
     */
    displayName?: string;
    /**
     * This represents the name of the container of origin. For AAD accounts this is the tenantID of the home tenant. For MSA accounts this is the string "Windows Live ID".
     */
    domain?: string;
    /**
     * This is the VSID of the home tenant profile. If the profile is signed into the home tenant or if the profile has no tenants then this Id is the same as the Id returned by the profile/profiles/me endpoint. Going forward it is recommended that you use the combined values of Origin, OriginId and Domain to uniquely identify a user rather than this Id.
     */
    id?: string;
    /**
     * The type of source provider for the origin identifier. For MSA accounts this is "msa". For AAD accounts this is "aad".
     */
    origin?: string;
    /**
     * The unique identifier from the system of origin. If there are multiple tenants this is the unique identifier of the account in the home tenant. (For MSA this is the PUID in hex notation, for AAD this is the object id.)
     */
    originId?: string;
    /**
     * For AAD accounts this is all of the tenants that this account is a member of.
     */
    tenants?: Array<TenantInfo>;
};

