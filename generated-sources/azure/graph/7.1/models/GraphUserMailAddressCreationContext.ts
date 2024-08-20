/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GraphUserCreationContext } from './GraphUserCreationContext';
/**
 * Use this type to create a new user using the mail address as a reference to an existing user from an external AD or AAD backed provider. This is the subset of GraphUser fields required for creation of a GraphUser for the AD and AAD use case when looking up the user by its mail address in the backing provider.
 */
export type GraphUserMailAddressCreationContext = (GraphUserCreationContext & {
    /**
     * This should be the mail address of the user in the source AD or AAD provider. Example: Jamal.Hartnett@contoso.com Team Services will communicate with the source provider to fill all other fields on creation.
     */
    mailAddress?: string;
});

