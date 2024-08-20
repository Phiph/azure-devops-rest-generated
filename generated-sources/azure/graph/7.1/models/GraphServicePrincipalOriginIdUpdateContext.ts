/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GraphServicePrincipalUpdateContext } from './GraphServicePrincipalUpdateContext';
/**
 * Use this type to update an existing service principal using the OriginID as a reference to an existing service principal from an external AAD backed provider. This is the subset of GraphServicePrincipal fields required for creation of a GraphServicePrincipal for AAD use case when looking up the service principal by its unique ID in the backing provider.
 */
export type GraphServicePrincipalOriginIdUpdateContext = (GraphServicePrincipalUpdateContext & {
    /**
     * This should be the object id or sid of the service principal from the source AAD provider. Example: d47d025a-ce2f-4a79-8618-e8862ade30dd Azure Devops will communicate with the source provider to fill all other fields on creation.
     */
    originId?: string;
});

