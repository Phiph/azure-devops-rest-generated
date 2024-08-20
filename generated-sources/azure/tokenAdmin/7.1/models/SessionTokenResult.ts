/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SessionToken } from './SessionToken';
export type SessionTokenResult = {
    hasError?: boolean;
    sessionToken?: SessionToken;
    sessionTokenError?: 'none' | 'displayNameRequired' | 'invalidDisplayName' | 'invalidValidTo' | 'invalidScope' | 'userIdRequired' | 'invalidUserId' | 'invalidUserType' | 'accessDenied' | 'failedToIssueAccessToken' | 'invalidClient' | 'invalidClientType' | 'invalidClientId' | 'invalidTargetAccounts' | 'hostAuthorizationNotFound' | 'authorizationNotFound' | 'failedToUpdateAccessToken' | 'sourceNotSupported' | 'invalidSourceIP' | 'invalidSource' | 'duplicateHash' | 'sshPolicyDisabled' | 'invalidToken' | 'tokenNotFound' | 'invalidAuthorizationId' | 'failedToReadTenantPolicy' | 'globalPatPolicyViolation' | 'fullScopePatPolicyViolation' | 'patLifespanPolicyViolation' | 'invalidTokenType' | 'invalidAudience' | 'invalidSubject' | 'deploymentHostNotSupported';
};
