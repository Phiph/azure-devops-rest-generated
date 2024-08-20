/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class SymsrvService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Given a client key, returns the best matched debug entry.
     * @returns any The debug entry is found and its metadata returned as JSON.
     * @throws ApiError
     */
    public symsrvGet({
        organization,
        debugEntryClientKey,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * A "client key" used by both ends of Microsoft's symbol protocol to identify a debug entry. The semantics of client key is governed by symsrv and is beyond the scope of this documentation.
         */
        debugEntryClientKey: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/symbol/symsrv/{debugEntryClientKey}',
            path: {
                'organization': organization,
                'debugEntryClientKey': debugEntryClientKey,
            },
            errors: {
                302: `The debug entry is found and its URI is placed in the Location header.`,
                404: `No debug entry was found for this client key.`,
            },
        });
    }
}
