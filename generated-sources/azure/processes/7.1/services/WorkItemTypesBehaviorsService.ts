/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WorkItemTypeBehavior } from '../models/WorkItemTypeBehavior';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class WorkItemTypesBehaviorsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Adds a behavior to the work item type of the process.
     * @returns WorkItemTypeBehavior successful operation
     * @throws ApiError
     */
    public workItemTypesBehaviorsAdd({
        organization,
        body,
        processId,
        witRefNameForBehaviors,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        body: WorkItemTypeBehavior,
        /**
         * The ID of the process
         */
        processId: string,
        /**
         * Work item type reference name for the behavior
         */
        witRefNameForBehaviors: string,
    }): CancelablePromise<WorkItemTypeBehavior> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/_apis/work/processes/{processId}/workitemtypesbehaviors/{witRefNameForBehaviors}/behaviors',
            path: {
                'organization': organization,
                'processId': processId,
                'witRefNameForBehaviors': witRefNameForBehaviors,
            },
            body: body,
        });
    }
    /**
     * Returns a list of all behaviors for the work item type of the process.
     * @returns WorkItemTypeBehavior successful operation
     * @throws ApiError
     */
    public workItemTypesBehaviorsList({
        organization,
        processId,
        witRefNameForBehaviors,
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
         * Work item type reference name for the behavior
         */
        witRefNameForBehaviors: string,
    }): CancelablePromise<Array<WorkItemTypeBehavior>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/work/processes/{processId}/workitemtypesbehaviors/{witRefNameForBehaviors}/behaviors',
            path: {
                'organization': organization,
                'processId': processId,
                'witRefNameForBehaviors': witRefNameForBehaviors,
            },
        });
    }
    /**
     * Updates a behavior for the work item type of the process.
     * @returns WorkItemTypeBehavior successful operation
     * @throws ApiError
     */
    public workItemTypesBehaviorsUpdate({
        organization,
        body,
        processId,
        witRefNameForBehaviors,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        body: WorkItemTypeBehavior,
        /**
         * The ID of the process
         */
        processId: string,
        /**
         * Work item type reference name for the behavior
         */
        witRefNameForBehaviors: string,
    }): CancelablePromise<WorkItemTypeBehavior> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/{organization}/_apis/work/processes/{processId}/workitemtypesbehaviors/{witRefNameForBehaviors}/behaviors',
            path: {
                'organization': organization,
                'processId': processId,
                'witRefNameForBehaviors': witRefNameForBehaviors,
            },
            body: body,
        });
    }
    /**
     * Returns a behavior for the work item type of the process.
     * @returns WorkItemTypeBehavior successful operation
     * @throws ApiError
     */
    public workItemTypesBehaviorsGet({
        organization,
        processId,
        witRefNameForBehaviors,
        behaviorRefName,
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
         * Work item type reference name for the behavior
         */
        witRefNameForBehaviors: string,
        /**
         * The reference name of the behavior
         */
        behaviorRefName: string,
    }): CancelablePromise<WorkItemTypeBehavior> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/work/processes/{processId}/workitemtypesbehaviors/{witRefNameForBehaviors}/behaviors/{behaviorRefName}',
            path: {
                'organization': organization,
                'processId': processId,
                'witRefNameForBehaviors': witRefNameForBehaviors,
                'behaviorRefName': behaviorRefName,
            },
        });
    }
    /**
     * Removes a behavior for the work item type of the process.
     * @returns any successful operation
     * @throws ApiError
     */
    public workItemTypesBehaviorsRemoveBehaviorFromWorkItemType({
        organization,
        processId,
        witRefNameForBehaviors,
        behaviorRefName,
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
         * Work item type reference name for the behavior
         */
        witRefNameForBehaviors: string,
        /**
         * The reference name of the behavior
         */
        behaviorRefName: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/{organization}/_apis/work/processes/{processId}/workitemtypesbehaviors/{witRefNameForBehaviors}/behaviors/{behaviorRefName}',
            path: {
                'organization': organization,
                'processId': processId,
                'witRefNameForBehaviors': witRefNameForBehaviors,
                'behaviorRefName': behaviorRefName,
            },
        });
    }
}
