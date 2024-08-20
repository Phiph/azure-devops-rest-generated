/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TokenAdminRevocationRule } from '../models/TokenAdminRevocationRule';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class RevocationRulesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Creates a revocation rule to prevent the further usage of any OAuth authorizations that were created before the current point in time and which match the conditions in the rule.
     *
     * Not all kinds of OAuth authorizations can be revoked directly.
     * Some, such as self-describing session tokens, must instead by revoked by creating a rule
     * which will be evaluated and used to reject matching OAuth credentials at authentication time.
     * Revocation rules created through this endpoint will apply to all credentials that were issued
     * before the datetime at which the rule was created and which match one or more additional conditions.
     * @returns any The revocation rule was created successfully.
     * @throws ApiError
     */
    public revocationRulesCreate({
        organization,
        body,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The revocation rule to create. The rule must specify a space-separated list of scopes, after which preexisting OAuth authorizations that match that any of the scopes will be rejected. For a list of all OAuth scopes supported by VSTS, see: https://docs.microsoft.com/en-us/vsts/integrate/get-started/authentication/oauth?view=vsts#scopes The rule may also specify the time before which to revoke tokens.
         */
        body: TokenAdminRevocationRule,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/_apis/tokenadmin/revocationrules',
            path: {
                'organization': organization,
            },
            body: body,
            errors: {
                400: `The input is invalid, such as by not containing a scope.`,
                401: `If the caller does not have permission to administrate tokens`,
            },
        });
    }
}
