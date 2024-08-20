/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PagedGraphMemberList } from '../models/PagedGraphMemberList';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class MembersService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get direct members of a Group.
     * @returns PagedGraphMemberList successful operation
     * @throws ApiError
     */
    public membersGet({
        organization,
        groupId,
        maxResults,
        pagingToken,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Id of the Group.
         */
        groupId: string,
        /**
         * Maximum number of results to retrieve.
         */
        maxResults?: number,
        /**
         * Paging Token from the previous page fetched. If the 'pagingToken' is null, the results would be fetched from the beginning of the Members List.
         */
        pagingToken?: string,
    }): CancelablePromise<PagedGraphMemberList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/GroupEntitlements/{groupId}/members',
            path: {
                'organization': organization,
                'groupId': groupId,
            },
            query: {
                'maxResults': maxResults,
                'pagingToken': pagingToken,
            },
        });
    }
    /**
     * Add a member to a Group.
     * @returns any successful operation
     * @throws ApiError
     */
    public membersAdd({
        organization,
        groupId,
        memberId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Id of the Group.
         */
        groupId: string,
        /**
         * Id of the member to add.
         */
        memberId: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/{organization}/_apis/GroupEntitlements/{groupId}/members/{memberId}',
            path: {
                'organization': organization,
                'groupId': groupId,
                'memberId': memberId,
            },
        });
    }
    /**
     * Remove a member from a Group.
     * @returns any successful operation
     * @throws ApiError
     */
    public membersRemoveMemberFromGroup({
        organization,
        groupId,
        memberId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Id of the group.
         */
        groupId: string,
        /**
         * Id of the member to remove.
         */
        memberId: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/{organization}/_apis/GroupEntitlements/{groupId}/members/{memberId}',
            path: {
                'organization': organization,
                'groupId': groupId,
                'memberId': memberId,
            },
        });
    }
}
