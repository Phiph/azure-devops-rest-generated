/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ContributionBase } from './ContributionBase';
import type { ContributionPropertyDescription } from './ContributionPropertyDescription';
/**
 * A contribution type, given by a json schema
 */
export type ContributionType = (ContributionBase & {
    /**
     * Controls whether or not contributions of this type have the type indexed for queries. This allows clients to find all extensions that have a contribution of this type.  NOTE: Only TrustedPartners are allowed to specify indexed contribution types.
     */
    indexed?: boolean;
    /**
     * Friendly name of the contribution/type
     */
    name?: string;
    /**
     * Describes the allowed properties for this contribution type
     */
    properties?: Record<string, ContributionPropertyDescription>;
});

