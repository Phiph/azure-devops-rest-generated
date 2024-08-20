/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { JsonPatchDocument } from '../models/JsonPatchDocument';
import type { PagedGraphMemberList } from '../models/PagedGraphMemberList';
import type { UserEntitlement } from '../models/UserEntitlement';
import type { UserEntitlementOperationReference } from '../models/UserEntitlementOperationReference';
import type { UserEntitlementsPatchResponse } from '../models/UserEntitlementsPatchResponse';
import type { UserEntitlementsPostResponse } from '../models/UserEntitlementsPostResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class UserEntitlementsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Add a user, assign license and extensions and make them a member of a project group in an account.
     * @returns UserEntitlementsPostResponse successful operation
     * @throws ApiError
     */
    public userEntitlementsAdd({
        organization,
        body,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * UserEntitlement object specifying License, Extensions and Project/Team groups the user should be added to.
         */
        body: UserEntitlement,
    }): CancelablePromise<UserEntitlementsPostResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/_apis/userentitlements',
            path: {
                'organization': organization,
            },
            body: body,
        });
    }
    /**
     * Get a paged set of user entitlements matching the filter and sort criteria built with properties that match the select input.
     * @returns PagedGraphMemberList successful operation
     * @throws ApiError
     */
    public userEntitlementsSearchUserEntitlements({
        organization,
        continuationToken,
        select,
        filter,
        orderBy,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Continuation token for getting the next page of data set. If null is passed, gets the first page.
         */
        continuationToken?: string,
        /**
         * Comma (",") separated list of properties to select in the result entitlements. names of the properties are - 'Projects, 'Extensions' and 'Grouprules'.
         */
        select?: 'license' | 'extensions' | 'projects' | 'groupRules' | 'all',
        /**
         * Equality operators relating to searching user entitlements seperated by and clauses. Valid filters include: licenseId, licenseStatus, userType, and name. licenseId: filters based on license assignment using license names. i.e. licenseId eq 'Account-Stakeholder' or licenseId eq 'Account-Express'. licenseStatus: filters based on license status. currently only supports disabled. i.e. licenseStatus eq 'Disabled'. To get disabled basic licenses, you would pass (licenseId eq 'Account-Express' and licenseStatus eq 'Disabled') userType: filters off identity type. Suppored types are member or guest i.e. userType eq 'member'. name: filters on if the user's display name or email contians given input. i.e. get all users with "test" in email or displayname is "name eq 'test'". A valid query could be: (licenseId eq 'Account-Stakeholder' or (licenseId eq 'Account-Express' and licenseStatus eq 'Disabled')) and name eq 'test' and userType eq 'guest'.
         */
        filter?: string,
        /**
         * PropertyName and Order (separated by a space ( )) to sort on (e.g. lastAccessed desc). Order defaults to ascending. valid properties to order by are dateCreated, lastAccessed, and name
         */
        orderBy?: string,
    }): CancelablePromise<PagedGraphMemberList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/userentitlements',
            path: {
                'organization': organization,
            },
            query: {
                'continuationToken': continuationToken,
                'select': select,
                '$filter': filter,
                '$orderBy': orderBy,
            },
        });
    }
    /**
     * Edit the entitlements (License, Extensions, Projects, Teams etc) for one or more users.
     * @returns UserEntitlementOperationReference successful operation
     * @throws ApiError
     */
    public userEntitlementsUpdateUserEntitlements({
        organization,
        body,
        doNotSendInviteForNewUsers,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * JsonPatchDocument containing the operations to perform.
         */
        body: JsonPatchDocument,
        /**
         * Whether to send email invites to new users or not
         */
        doNotSendInviteForNewUsers?: boolean,
    }): CancelablePromise<UserEntitlementOperationReference> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/{organization}/_apis/userentitlements',
            path: {
                'organization': organization,
            },
            query: {
                'doNotSendInviteForNewUsers': doNotSendInviteForNewUsers,
            },
            body: body,
        });
    }
    /**
     * Delete a user from the account.
     *
     * The delete operation includes unassigning Extensions and Licenses and removing the user from all project memberships.
     * The user would continue to have access to the account if she is member of an AAD group, that is added directly to the account.
     * @returns any successful operation
     * @throws ApiError
     */
    public userEntitlementsDelete({
        organization,
        userId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * ID of the user.
         */
        userId: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/{organization}/_apis/userentitlements/{userId}',
            path: {
                'organization': organization,
                'userId': userId,
            },
        });
    }
    /**
     * Get User Entitlement for a user.
     * @returns UserEntitlement successful operation
     * @throws ApiError
     */
    public userEntitlementsGet({
        organization,
        userId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * ID of the user.
         */
        userId: string,
    }): CancelablePromise<UserEntitlement> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/userentitlements/{userId}',
            path: {
                'organization': organization,
                'userId': userId,
            },
        });
    }
    /**
     * Edit the entitlements (License, Extensions, Projects, Teams etc) for a user.
     * @returns UserEntitlementsPatchResponse successful operation
     * @throws ApiError
     */
    public userEntitlementsUpdateUserEntitlement({
        organization,
        body,
        userId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * JsonPatchDocument containing the operations to perform on the user.
         */
        body: JsonPatchDocument,
        /**
         * ID of the user.
         */
        userId: string,
    }): CancelablePromise<UserEntitlementsPatchResponse> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/{organization}/_apis/userentitlements/{userId}',
            path: {
                'organization': organization,
                'userId': userId,
            },
            body: body,
        });
    }
}
