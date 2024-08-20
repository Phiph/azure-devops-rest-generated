/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GraphServicePrincipalCreationContext } from './GraphServicePrincipalCreationContext';
/**
 * Use this type to create a new service principal using the OriginID as a reference to an existing service principal from an external AAD backed provider. This is the subset of GraphServicePrincipal fields required for creation of a GraphServicePrincipal for the AAD use case when looking up the service principal by its unique ID in the backing provider.
 */
export type GraphServicePrincipalOriginIdCreationContext = (GraphServicePrincipalCreationContext & {
    /**
     * This should be the object id of the service principal from the AAD provider. Example: d47d025a-ce2f-4a79-8618-e8862ade30dd Team Services will communicate with the source provider to fill all other fields on creation.
     */
    originId?: string;
});

