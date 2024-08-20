/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GraphMembershipState } from '../models/GraphMembershipState';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class MembershipStatesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Check whether a subject is active or inactive.
     * @returns GraphMembershipState successful operation
     * @throws ApiError
     */
    public membershipStatesGet({
        organization,
        subjectDescriptor,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Descriptor of the subject (user, group, scope, etc.) to check state of
         */
        subjectDescriptor: string,
    }): CancelablePromise<GraphMembershipState> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/graph/membershipstates/{subjectDescriptor}',
            path: {
                'organization': organization,
                'subjectDescriptor': subjectDescriptor,
            },
        });
    }
}
