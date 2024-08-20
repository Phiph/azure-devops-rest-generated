/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AssociatedWorkItem } from '../models/AssociatedWorkItem';
import type { TfvcChange } from '../models/TfvcChange';
import type { TfvcShelveset } from '../models/TfvcShelveset';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ShelvesetsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get a single deep shelveset.
     * @returns TfvcShelveset successful operation
     * @throws ApiError
     */
    public shelvesetsGet({
        organization,
        shelvesetId,
        requestDataIncludeDetails,
        requestDataIncludeLinks,
        requestDataIncludeWorkItems,
        requestDataMaxChangeCount,
        requestDataMaxCommentLength,
        requestDataName,
        requestDataOwner,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Shelveset's unique ID
         */
        shelvesetId: string,
        /**
         * Whether to include policyOverride and notes Only applies when requesting a single deep shelveset
         */
        requestDataIncludeDetails?: boolean,
        /**
         * Whether to include the _links field on the shallow references. Does not apply when requesting a single deep shelveset object. Links will always be included in the deep shelveset.
         */
        requestDataIncludeLinks?: boolean,
        /**
         * Whether to include workItems
         */
        requestDataIncludeWorkItems?: boolean,
        /**
         * Max number of changes to include
         */
        requestDataMaxChangeCount?: number,
        /**
         * Max length of comment
         */
        requestDataMaxCommentLength?: number,
        /**
         * Shelveset name
         */
        requestDataName?: string,
        /**
         * Owner's ID. Could be a name or a guid.
         */
        requestDataOwner?: string,
    }): CancelablePromise<TfvcShelveset> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/tfvc/shelvesets',
            path: {
                'organization': organization,
            },
            query: {
                'shelvesetId': shelvesetId,
                'requestData.includeDetails': requestDataIncludeDetails,
                'requestData.includeLinks': requestDataIncludeLinks,
                'requestData.includeWorkItems': requestDataIncludeWorkItems,
                'requestData.maxChangeCount': requestDataMaxChangeCount,
                'requestData.maxCommentLength': requestDataMaxCommentLength,
                'requestData.name': requestDataName,
                'requestData.owner': requestDataOwner,
            },
        });
    }
    /**
     * Get changes included in a shelveset.
     * @returns TfvcChange successful operation
     * @throws ApiError
     */
    public shelvesetsGetShelvesetChanges({
        organization,
        shelvesetId,
        top,
        skip,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Shelveset's unique ID
         */
        shelvesetId: string,
        /**
         * Max number of changes to return
         */
        top?: number,
        /**
         * Number of changes to skip
         */
        skip?: number,
    }): CancelablePromise<Array<TfvcChange>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/tfvc/shelvesets/changes',
            path: {
                'organization': organization,
            },
            query: {
                'shelvesetId': shelvesetId,
                '$top': top,
                '$skip': skip,
            },
        });
    }
    /**
     * Get work items associated with a shelveset.
     * @returns AssociatedWorkItem successful operation
     * @throws ApiError
     */
    public shelvesetsGetShelvesetWorkItems({
        organization,
        shelvesetId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Shelveset's unique ID
         */
        shelvesetId: string,
    }): CancelablePromise<Array<AssociatedWorkItem>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/tfvc/shelvesets/workitems',
            path: {
                'organization': organization,
            },
            query: {
                'shelvesetId': shelvesetId,
            },
        });
    }
}
