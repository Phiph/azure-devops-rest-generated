/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TemporaryQueryRequestModel } from '../models/TemporaryQueryRequestModel';
import type { TemporaryQueryResponseModel } from '../models/TemporaryQueryResponseModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class TempQueriesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Creates a temporary query
     *
     * Learn more about Work Item Query Language (WIQL) syntax [here](https://docs.microsoft.com/en-us/vsts/collaborate/wiql-syntax?toc=/vsts/work/track/toc.json&bc=/vsts/work/track/breadcrumb/toc.json&view=vsts).
     * @returns TemporaryQueryResponseModel successful operation
     * @throws ApiError
     */
    public tempQueriesCreate({
        organization,
        body,
        project,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The temporary query to create
         */
        body: TemporaryQueryRequestModel,
        /**
         * Project ID or project name
         */
        project: string,
    }): CancelablePromise<TemporaryQueryResponseModel> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/{project}/_apis/wit/tempqueries',
            path: {
                'organization': organization,
                'project': project,
            },
            body: body,
        });
    }
}
