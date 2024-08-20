/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AuthorizationGrant } from './AuthorizationGrant';
import type { JsonWebToken } from './JsonWebToken';
export type RefreshTokenGrant = (AuthorizationGrant & {
    jwt?: JsonWebToken;
});

