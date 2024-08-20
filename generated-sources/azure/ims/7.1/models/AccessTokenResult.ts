/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { JsonWebToken } from './JsonWebToken';
import type { RefreshTokenGrant } from './RefreshTokenGrant';
export type AccessTokenResult = {
    accessToken?: JsonWebToken;
    accessTokenError?: 'none' | 'grantTypeRequired' | 'authorizationGrantRequired' | 'clientSecretRequired' | 'redirectUriRequired' | 'invalidAuthorizationGrant' | 'invalidAuthorizationScopes' | 'invalidRefreshToken' | 'authorizationNotFound' | 'authorizationGrantExpired' | 'accessAlreadyIssued' | 'invalidRedirectUri' | 'accessTokenNotFound' | 'invalidAccessToken' | 'accessTokenAlreadyRefreshed' | 'invalidClientSecret' | 'clientSecretExpired' | 'serverError' | 'accessDenied' | 'accessTokenKeyRequired' | 'invalidAccessTokenKey' | 'failedToGetAccessToken' | 'invalidClientId' | 'invalidClient' | 'invalidValidTo' | 'invalidUserId' | 'failedToIssueAccessToken' | 'authorizationGrantScopeMissing' | 'invalidPublicAccessTokenKey' | 'invalidPublicAccessToken' | 'publicFeatureFlagNotEnabled' | 'sshPolicyDisabled' | 'hostAuthorizationNotFound' | 'hostAuthorizationIsNotValid' | 'invalidScope';
    authorizationId?: string;
    errorDescription?: string;
    hasError?: boolean;
    isFirstPartyClient?: boolean;
    refreshToken?: RefreshTokenGrant;
    scope?: string;
    tokenType?: string;
    validTo?: string;
};

