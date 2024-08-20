/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TokenAdminPagedSessionTokens } from '../models/TokenAdminPagedSessionTokens';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class PersonalAccessTokensService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Lists of all the session token details of the personal access tokens (PATs) for a particular user.
     * @returns TokenAdminPagedSessionTokens An an array containing all the session token objects corresponding to the user's PATs.
     * @throws ApiError
     */
    public personalAccessTokensList({
        organization,
        subjectDescriptor,
        pageSize,
        continuationToken,
        isPublic,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The descriptor of the target user.
         */
        subjectDescriptor: string,
        /**
         * The maximum number of results to return on each page.
         */
        pageSize?: number,
        /**
         * An opaque data blob that allows the next page of data to resume immediately after where the previous page ended. The only reliable way to know if there is more data left is the presence of a continuation token.
         */
        continuationToken?: string,
        /**
         * Set to false for PAT tokens and true for SSH tokens.
         */
        isPublic?: boolean,
    }): CancelablePromise<TokenAdminPagedSessionTokens> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/tokenadmin/personalaccesstokens/{subjectDescriptor}',
            path: {
                'organization': organization,
                'subjectDescriptor': subjectDescriptor,
            },
            query: {
                'pageSize': pageSize,
                'continuationToken': continuationToken,
                'isPublic': isPublic,
            },
            errors: {
                400: `The input is invalid, such as by containing an invalid subject descriptor, page size, or continuation token`,
                401: `If the caller does not have permission to administrate tokens`,
                404: `If the user with the given subject descriptor cannot be found.`,
            },
        });
    }
}
