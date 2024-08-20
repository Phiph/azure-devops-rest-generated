/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ClientContributionProviderDetails = {
    /**
     * Friendly name for the provider.
     */
    displayName?: string;
    /**
     * Unique identifier for this provider. The provider name can be used to cache the contribution data and refer back to it when looking for changes
     */
    name?: string;
    /**
     * Properties associated with the provider
     */
    properties?: Record<string, string>;
    /**
     * Version of contributions associated with this contribution provider.
     */
    version?: string;
};

