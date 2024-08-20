/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ClientService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get client version information.
     * @returns any Operation successful. The information about the client version can be found in the response headers. Note this doesn't guarantee a retrieval to be successful.
     * @throws ApiError
     */
    public clientHeadClient({
        organization,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'HEAD',
            url: '/{organization}/_apis/symbol/client',
            path: {
                'organization': organization,
            },
        });
    }
    /**
     * Get the client package.
     * @returns string Successfully retrieved the client package. The user agent may read response body to get the package.
     * @throws ApiError
     */
    public clientGet({
        organization,
        clientType,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Either "EXE" for a zip file containing a Windows symbol client (a.k.a. symbol.exe) along with dependencies, or "TASK" for a VSTS task that can be run on a VSTS build agent. All the other values are invalid. The parameter is case-insensitive.
         */
        clientType: string,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/symbol/client/{clientType}',
            path: {
                'organization': organization,
                'clientType': clientType,
            },
            errors: {
                404: `The client as specified by the client type is not found.`,
            },
        });
    }
}
