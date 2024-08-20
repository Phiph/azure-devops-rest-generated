/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GraphUserCreationContext } from './GraphUserCreationContext';
/**
 * Use this type to create a new user using the OriginID as a reference to an existing user from an external AD or AAD backed provider. This is the subset of GraphUser fields required for creation of a GraphUser for the AD and AAD use case when looking up the user by its unique ID in the backing provider.
 */
export type GraphUserOriginIdCreationContext = (GraphUserCreationContext & {
    /**
     * This should be the name of the origin provider. Example: github.com
     */
    origin?: string;
    /**
     * This should be the object id or sid of the user from the source AD or AAD provider. Example: d47d025a-ce2f-4a79-8618-e8862ade30dd Team Services will communicate with the source provider to fill all other fields on creation.
     */
    originId?: string;
});

