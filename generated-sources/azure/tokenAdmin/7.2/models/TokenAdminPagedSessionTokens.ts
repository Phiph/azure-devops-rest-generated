/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SessionToken } from './SessionToken';
/**
 * A paginated list of session tokens. Session tokens correspond to OAuth credentials such as personal access tokens (PATs) and other OAuth authorizations.
 */
export type TokenAdminPagedSessionTokens = {
    /**
     * The continuation token that can be used to retrieve the next page of session tokens, or <code>null</code> if there is no next page.
     */
    continuationToken?: string;
    /**
     * The list of all session tokens in the current page.
     */
    value?: Array<SessionToken>;
};

