/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IdentityDescriptor } from './IdentityDescriptor';
import type { PublicKey } from './PublicKey';
export type ProxyAuthorization = {
    /**
     * Gets or sets the endpoint used to obtain access tokens from the configured token service.
     */
    authorizationUrl?: string;
    /**
     * Gets or sets the client identifier for this proxy.
     */
    clientId?: string;
    /**
     * Gets or sets the user identity to authorize for on-prem.
     */
    identity?: IdentityDescriptor;
    /**
     * Gets or sets the public key used to verify the identity of this proxy. Only specify on hosted.
     */
    publicKey?: PublicKey;
};

