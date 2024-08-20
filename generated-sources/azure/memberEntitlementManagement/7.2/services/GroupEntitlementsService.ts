/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GroupEntitlement } from '../models/GroupEntitlement';
import type { GroupEntitlementOperationReference } from '../models/GroupEntitlementOperationReference';
import type { JsonPatchDocument } from '../models/JsonPatchDocument';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class GroupEntitlementsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Create a group entitlement with license rule, extension rule.
     * @returns GroupEntitlementOperationReference Created
     * @throws ApiError
     */
    public groupEntitlementsAdd({
        organization,
        body,
        ruleOption,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * GroupEntitlement object specifying License Rule, Extensions Rule for the group. Based on the rules the members of the group will be given licenses and extensions. The Group Entitlement can be used to add the group to another project level groups
         */
        body: GroupEntitlement,
        /**
         * RuleOption [ApplyGroupRule/TestApplyGroupRule] - specifies if the rules defined in group entitlement should be created and applied to it’s members (default option) or just be tested
         */
        ruleOption?: 'applyGroupRule' | 'testApplyGroupRule',
    }): CancelablePromise<GroupEntitlementOperationReference> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/_apis/groupentitlements',
            path: {
                'organization': organization,
            },
            query: {
                'ruleOption': ruleOption,
            },
            body: body,
        });
    }
    /**
     * Get the group entitlements for an account.
     * @returns GroupEntitlement successful operation
     * @throws ApiError
     */
    public groupEntitlementsList({
        organization,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
    }): CancelablePromise<Array<GroupEntitlement>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/groupentitlements',
            path: {
                'organization': organization,
            },
        });
    }
    /**
     * Delete a group entitlement.
     * @returns GroupEntitlementOperationReference successful operation
     * @throws ApiError
     */
    public groupEntitlementsDelete({
        organization,
        groupId,
        ruleOption,
        removeGroupMembership,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * ID of the group to delete.
         */
        groupId: string,
        /**
         * RuleOption [ApplyGroupRule/TestApplyGroupRule] - specifies if the rules defined in group entitlement should be deleted and the changes are applied to it’s members (default option) or just be tested
         */
        ruleOption?: 'applyGroupRule' | 'testApplyGroupRule',
        /**
         * Optional parameter that specifies whether the group with the given ID should be removed from all other groups
         */
        removeGroupMembership?: boolean,
    }): CancelablePromise<GroupEntitlementOperationReference> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/{organization}/_apis/groupentitlements/{groupId}',
            path: {
                'organization': organization,
                'groupId': groupId,
            },
            query: {
                'ruleOption': ruleOption,
                'removeGroupMembership': removeGroupMembership,
            },
        });
    }
    /**
     * Get a group entitlement.
     *
     * If the group entitlement does not exist, returns null.
     * @returns GroupEntitlement successful operation
     * @throws ApiError
     */
    public groupEntitlementsGet({
        organization,
        groupId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * ID of the group.
         */
        groupId: string,
    }): CancelablePromise<GroupEntitlement> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/groupentitlements/{groupId}',
            path: {
                'organization': organization,
                'groupId': groupId,
            },
        });
    }
    /**
     * Update entitlements (License Rule, Extensions Rule, Project memberships etc.) for a group.
     * @returns GroupEntitlementOperationReference successful operation
     * @throws ApiError
     */
    public groupEntitlementsUpdate({
        organization,
        body,
        groupId,
        ruleOption,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * JsonPatchDocument containing the operations to perform on the group.
         */
        body: JsonPatchDocument,
        /**
         * ID of the group.
         */
        groupId: string,
        /**
         * RuleOption [ApplyGroupRule/TestApplyGroupRule] - specifies if the rules defined in group entitlement should be updated and the changes are applied to it’s members (default option) or just be tested
         */
        ruleOption?: 'applyGroupRule' | 'testApplyGroupRule',
    }): CancelablePromise<GroupEntitlementOperationReference> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/{organization}/_apis/groupentitlements/{groupId}',
            path: {
                'organization': organization,
                'groupId': groupId,
            },
            query: {
                'ruleOption': ruleOption,
            },
            body: body,
        });
    }
}
