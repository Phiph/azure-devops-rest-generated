/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ContentsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get a stitched debug entry for a symbol request as specified by symbol request identifier and debug entry identifier.
     * @returns any The debug entry is found and stream content is placed in the response content.
     * @throws ApiError
     */
    public contentsGet({
        organization,
        requestId,
        debugEntryId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The symbol request identifier.
         */
        requestId: string,
        /**
         * The debug entry identifier.
         */
        debugEntryId: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/symbol/requests/{requestId}/contents/{debugEntryId}',
            path: {
                'organization': organization,
                'requestId': requestId,
                'debugEntryId': debugEntryId,
            },
            errors: {
                404: `No content was found for this debug entry identifier.`,
            },
        });
    }
}
