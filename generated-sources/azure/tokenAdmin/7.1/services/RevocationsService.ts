/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TokenAdminRevocation } from '../models/TokenAdminRevocation';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class RevocationsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Revokes the listed OAuth authorizations.
     * @returns void
     * @throws ApiError
     */
    public revocationsRevokeAuthorizations({
        organization,
        body,
        isPublic,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The list of objects containing the authorization IDs of the OAuth authorizations, such as session tokens retrieved by listed a users PATs, that should be revoked.
         */
        body: Array<TokenAdminRevocation>,
        /**
         * Set to false for PAT tokens and true for SSH tokens.
         */
        isPublic?: boolean,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/_apis/tokenadmin/revocations',
            path: {
                'organization': organization,
            },
            query: {
                'isPublic': isPublic,
            },
            body: body,
            errors: {
                400: `The input is invalid, such as by not containing an authorization ID.`,
                401: `If the caller does not have permission to administrate tokens`,
            },
        });
    }
}
