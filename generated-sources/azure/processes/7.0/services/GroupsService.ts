/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Group } from '../models/Group';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class GroupsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Adds a group to the work item form.
     * @returns Group successful operation
     * @throws ApiError
     */
    public groupsAdd({
        organization,
        body,
        processId,
        witRefName,
        pageId,
        sectionId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The group.
         */
        body: Group,
        /**
         * The ID of the process.
         */
        processId: string,
        /**
         * The reference name of the work item type.
         */
        witRefName: string,
        /**
         * The ID of the page to add the group to.
         */
        pageId: string,
        /**
         * The ID of the section to add the group to.
         */
        sectionId: string,
    }): CancelablePromise<Group> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/_apis/work/processes/{processId}/workItemTypes/{witRefName}/layout/pages/{pageId}/sections/{sectionId}/groups',
            path: {
                'organization': organization,
                'processId': processId,
                'witRefName': witRefName,
                'pageId': pageId,
                'sectionId': sectionId,
            },
            body: body,
        });
    }
    /**
     * Moves a group to a different section.
     * @returns Group successful operation
     * @throws ApiError
     */
    public groupsMoveGroupToSection({
        organization,
        body,
        processId,
        witRefName,
        pageId,
        sectionId,
        groupId,
        removeFromSectionId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The updated group.
         */
        body: Group,
        /**
         * The ID of the process.
         */
        processId: string,
        /**
         * The reference name of the work item type.
         */
        witRefName: string,
        /**
         * The ID of the page the group is in.
         */
        pageId: string,
        /**
         * The ID of the section the group is in.
         */
        sectionId: string,
        /**
         * The ID of the group.
         */
        groupId: string,
        /**
         * ID of the section to remove the group from.
         */
        removeFromSectionId: string,
    }): CancelablePromise<Group> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/{organization}/_apis/work/processes/{processId}/workItemTypes/{witRefName}/layout/pages/{pageId}/sections/{sectionId}/groups/{groupId}',
            path: {
                'organization': organization,
                'processId': processId,
                'witRefName': witRefName,
                'pageId': pageId,
                'sectionId': sectionId,
                'groupId': groupId,
            },
            query: {
                'removeFromSectionId': removeFromSectionId,
            },
            body: body,
        });
    }
    /**
     * Removes a group from the work item form.
     * @returns any successful operation
     * @throws ApiError
     */
    public groupsRemoveGroup({
        organization,
        processId,
        witRefName,
        pageId,
        sectionId,
        groupId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The ID of the process
         */
        processId: string,
        /**
         * The reference name of the work item type
         */
        witRefName: string,
        /**
         * The ID of the page the group is in
         */
        pageId: string,
        /**
         * The ID of the section to the group is in
         */
        sectionId: string,
        /**
         * The ID of the group
         */
        groupId: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/{organization}/_apis/work/processes/{processId}/workItemTypes/{witRefName}/layout/pages/{pageId}/sections/{sectionId}/groups/{groupId}',
            path: {
                'organization': organization,
                'processId': processId,
                'witRefName': witRefName,
                'pageId': pageId,
                'sectionId': sectionId,
                'groupId': groupId,
            },
        });
    }
    /**
     * Updates a group in the work item form.
     * @returns Group successful operation
     * @throws ApiError
     */
    public groupsUpdate({
        organization,
        body,
        processId,
        witRefName,
        pageId,
        sectionId,
        groupId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The updated group.
         */
        body: Group,
        /**
         * The ID of the process.
         */
        processId: string,
        /**
         * The reference name of the work item type.
         */
        witRefName: string,
        /**
         * The ID of the page the group is in.
         */
        pageId: string,
        /**
         * The ID of the section the group is in.
         */
        sectionId: string,
        /**
         * The ID of the group.
         */
        groupId: string,
    }): CancelablePromise<Group> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/{organization}/_apis/work/processes/{processId}/workItemTypes/{witRefName}/layout/pages/{pageId}/sections/{sectionId}/groups/{groupId}',
            path: {
                'organization': organization,
                'processId': processId,
                'witRefName': witRefName,
                'pageId': pageId,
                'sectionId': sectionId,
                'groupId': groupId,
            },
            body: body,
        });
    }
}
