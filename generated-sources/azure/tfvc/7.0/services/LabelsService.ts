/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TfvcItem } from '../models/TfvcItem';
import type { TfvcLabel } from '../models/TfvcLabel';
import type { TfvcLabelRef } from '../models/TfvcLabelRef';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class LabelsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get items under a label.
     * @returns TfvcItem successful operation
     * @throws ApiError
     */
    public labelsGetLabelItems({
        organization,
        labelId,
        top,
        skip,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Unique identifier of label
         */
        labelId: string,
        /**
         * Max number of items to return
         */
        top?: number,
        /**
         * Number of items to skip
         */
        skip?: number,
    }): CancelablePromise<Array<TfvcItem>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/tfvc/labels/{labelId}/items',
            path: {
                'organization': organization,
                'labelId': labelId,
            },
            query: {
                '$top': top,
                '$skip': skip,
            },
        });
    }
    /**
     * Get a collection of shallow label references.
     * @returns TfvcLabelRef successful operation
     * @throws ApiError
     */
    public labelsList({
        organization,
        project,
        requestDataIncludeLinks,
        requestDataItemLabelFilter,
        requestDataLabelScope,
        requestDataMaxItemCount,
        requestDataName,
        requestDataOwner,
        top,
        skip,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * Whether to include the _links field on the shallow references
         */
        requestDataIncludeLinks?: boolean,
        /**
         * labelScope, name, owner, and itemLabelFilter
         */
        requestDataItemLabelFilter?: string,
        /**
         * labelScope, name, owner, and itemLabelFilter
         */
        requestDataLabelScope?: string,
        /**
         * labelScope, name, owner, and itemLabelFilter
         */
        requestDataMaxItemCount?: number,
        /**
         * labelScope, name, owner, and itemLabelFilter
         */
        requestDataName?: string,
        /**
         * labelScope, name, owner, and itemLabelFilter
         */
        requestDataOwner?: string,
        /**
         * Max number of labels to return, defaults to 100 when undefined
         */
        top?: number,
        /**
         * Number of labels to skip
         */
        skip?: number,
    }): CancelablePromise<Array<TfvcLabelRef>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/tfvc/labels',
            path: {
                'organization': organization,
                'project': project,
            },
            query: {
                'requestData.includeLinks': requestDataIncludeLinks,
                'requestData.itemLabelFilter': requestDataItemLabelFilter,
                'requestData.labelScope': requestDataLabelScope,
                'requestData.maxItemCount': requestDataMaxItemCount,
                'requestData.name': requestDataName,
                'requestData.owner': requestDataOwner,
                '$top': top,
                '$skip': skip,
            },
        });
    }
    /**
     * Get a single deep label.
     * @returns TfvcLabel successful operation
     * @throws ApiError
     */
    public labelsGet({
        organization,
        labelId,
        project,
        requestDataIncludeLinks,
        requestDataItemLabelFilter,
        requestDataLabelScope,
        requestDataMaxItemCount,
        requestDataName,
        requestDataOwner,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Unique identifier of label
         */
        labelId: string,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * Whether to include the _links field on the shallow references
         */
        requestDataIncludeLinks?: boolean,
        /**
         * maxItemCount
         */
        requestDataItemLabelFilter?: string,
        /**
         * maxItemCount
         */
        requestDataLabelScope?: string,
        /**
         * maxItemCount
         */
        requestDataMaxItemCount?: number,
        /**
         * maxItemCount
         */
        requestDataName?: string,
        /**
         * maxItemCount
         */
        requestDataOwner?: string,
    }): CancelablePromise<TfvcLabel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/tfvc/labels/{labelId}',
            path: {
                'organization': organization,
                'labelId': labelId,
                'project': project,
            },
            query: {
                'requestData.includeLinks': requestDataIncludeLinks,
                'requestData.itemLabelFilter': requestDataItemLabelFilter,
                'requestData.labelScope': requestDataLabelScope,
                'requestData.maxItemCount': requestDataMaxItemCount,
                'requestData.name': requestDataName,
                'requestData.owner': requestDataOwner,
            },
        });
    }
}
