/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateProcessRuleRequest } from '../models/CreateProcessRuleRequest';
import type { ProcessRule } from '../models/ProcessRule';
import type { UpdateProcessRuleRequest } from '../models/UpdateProcessRuleRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class RulesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Adds a rule to work item type in the process.
     * @returns ProcessRule successful operation
     * @throws ApiError
     */
    public rulesAdd({
        organization,
        body,
        processId,
        witRefName,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        body: CreateProcessRuleRequest,
        /**
         * The ID of the process
         */
        processId: string,
        /**
         * The reference name of the work item type
         */
        witRefName: string,
    }): CancelablePromise<ProcessRule> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/_apis/work/processes/{processId}/workItemTypes/{witRefName}/rules',
            path: {
                'organization': organization,
                'processId': processId,
                'witRefName': witRefName,
            },
            body: body,
        });
    }
    /**
     * Returns a list of all rules in the work item type of the process.
     * @returns ProcessRule successful operation
     * @throws ApiError
     */
    public rulesList({
        organization,
        processId,
        witRefName,
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
    }): CancelablePromise<Array<ProcessRule>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/work/processes/{processId}/workItemTypes/{witRefName}/rules',
            path: {
                'organization': organization,
                'processId': processId,
                'witRefName': witRefName,
            },
        });
    }
    /**
     * Removes a rule from the work item type in the process.
     * @returns any successful operation
     * @throws ApiError
     */
    public rulesDelete({
        organization,
        processId,
        witRefName,
        ruleId,
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
         * The ID of the rule
         */
        ruleId: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/{organization}/_apis/work/processes/{processId}/workItemTypes/{witRefName}/rules/{ruleId}',
            path: {
                'organization': organization,
                'processId': processId,
                'witRefName': witRefName,
                'ruleId': ruleId,
            },
        });
    }
    /**
     * Returns a single rule in the work item type of the process.
     * @returns ProcessRule successful operation
     * @throws ApiError
     */
    public rulesGet({
        organization,
        processId,
        witRefName,
        ruleId,
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
         * The ID of the rule
         */
        ruleId: string,
    }): CancelablePromise<ProcessRule> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/work/processes/{processId}/workItemTypes/{witRefName}/rules/{ruleId}',
            path: {
                'organization': organization,
                'processId': processId,
                'witRefName': witRefName,
                'ruleId': ruleId,
            },
        });
    }
    /**
     * Updates a rule in the work item type of the process.
     * @returns ProcessRule successful operation
     * @throws ApiError
     */
    public rulesUpdate({
        organization,
        body,
        processId,
        witRefName,
        ruleId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        body: UpdateProcessRuleRequest,
        /**
         * The ID of the process
         */
        processId: string,
        /**
         * The reference name of the work item type
         */
        witRefName: string,
        /**
         * The ID of the rule
         */
        ruleId: string,
    }): CancelablePromise<ProcessRule> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/{organization}/_apis/work/processes/{processId}/workItemTypes/{witRefName}/rules/{ruleId}',
            path: {
                'organization': organization,
                'processId': processId,
                'witRefName': witRefName,
                'ruleId': ruleId,
            },
            body: body,
        });
    }
}
