/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PatToken } from './PatToken';
/**
 * Contains the resulting personal access token (PAT) and the error (if any) that occurred during the operation
 */
export type PatTokenResult = {
    /**
     * The resulting personal access token (PAT)
     */
    patToken?: PatToken;
    /**
     * The error (if any) that occurred
     */
    patTokenError?: 'none' | 'displayNameRequired' | 'invalidDisplayName' | 'invalidValidTo' | 'invalidScope' | 'userIdRequired' | 'invalidUserId' | 'invalidUserType' | 'accessDenied' | 'failedToIssueAccessToken' | 'invalidClient' | 'invalidClientType' | 'invalidClientId' | 'invalidTargetAccounts' | 'hostAuthorizationNotFound' | 'authorizationNotFound' | 'failedToUpdateAccessToken' | 'sourceNotSupported' | 'invalidSourceIP' | 'invalidSource' | 'duplicateHash' | 'sshPolicyDisabled' | 'invalidToken' | 'tokenNotFound' | 'invalidAuthorizationId' | 'failedToReadTenantPolicy' | 'globalPatPolicyViolation' | 'fullScopePatPolicyViolation' | 'patLifespanPolicyViolation' | 'invalidTokenType' | 'invalidAudience' | 'invalidSubject' | 'deploymentHostNotSupported';
};

