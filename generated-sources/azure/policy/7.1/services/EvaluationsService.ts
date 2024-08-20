/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PolicyEvaluationRecord } from '../models/PolicyEvaluationRecord';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class EvaluationsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Retrieves a list of all the policy evaluation statuses for a specific pull request.
     *
     * Evaluations are retrieved using an artifact ID which uniquely identifies the pull request.
     * To generate an artifact ID for a pull request, use this template:
     * ```
     * vstfs:///CodeReview/CodeReviewId/{projectId}/{pullRequestId}
     * ```
     * @returns PolicyEvaluationRecord successful operation
     * @throws ApiError
     */
    public evaluationsList({
        organization,
        project,
        artifactId,
        includeNotApplicable,
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
         * A string which uniquely identifies the target of a policy evaluation.
         */
        artifactId: string,
        /**
         * Some policies might determine that they do not apply to a specific pull request. Setting this parameter to true will return evaluation records even for policies which don't apply to this pull request.
         */
        includeNotApplicable?: boolean,
        /**
         * The number of policy evaluation records to retrieve.
         */
        top?: number,
        /**
         * The number of policy evaluation records to ignore. For example, to retrieve results 101-150, set top to 50 and skip to 100.
         */
        skip?: number,
    }): CancelablePromise<Array<PolicyEvaluationRecord>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/policy/evaluations',
            path: {
                'organization': organization,
                'project': project,
            },
            query: {
                'artifactId': artifactId,
                'includeNotApplicable': includeNotApplicable,
                '$top': top,
                '$skip': skip,
            },
        });
    }
    /**
     * Gets the present evaluation state of a policy.
     *
     * Each policy which applies to a pull request will have an evaluation state which is specific to that policy running
     * in the context of that pull request. Each evaluation is uniquely identified via a Guid. You can find all the policy
     * evaluations for a specific pull request using the List operation of this controller.
     * @returns PolicyEvaluationRecord successful operation
     * @throws ApiError
     */
    public evaluationsGet({
        organization,
        project,
        evaluationId,
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
         * ID of the policy evaluation to be retrieved.
         */
        evaluationId: string,
    }): CancelablePromise<PolicyEvaluationRecord> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/policy/evaluations/{evaluationId}',
            path: {
                'organization': organization,
                'project': project,
                'evaluationId': evaluationId,
            },
        });
    }
    /**
     * Requeue the policy evaluation.
     *
     * Some policies define a "requeue" action which performs some policy-specific operation.
     * You can trigger this operation by updating an existing policy evaluation and setting the
     * PolicyEvaluationRecord.Status field to Queued.
     * Although any policy evaluation can be requeued, at present only build policies perform any action
     * in response. Requeueing a build policy will queue a new build to run (cancelling any existing build which
     * is running).
     * @returns PolicyEvaluationRecord successful operation
     * @throws ApiError
     */
    public evaluationsRequeuePolicyEvaluation({
        organization,
        project,
        evaluationId,
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
         * ID of the policy evaluation to be retrieved.
         */
        evaluationId: string,
    }): CancelablePromise<PolicyEvaluationRecord> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/{organization}/{project}/_apis/policy/evaluations/{evaluationId}',
            path: {
                'organization': organization,
                'project': project,
                'evaluationId': evaluationId,
            },
        });
    }
}
