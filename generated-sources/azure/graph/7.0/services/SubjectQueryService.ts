/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GraphSubject } from '../models/GraphSubject';
import type { GraphSubjectQuery } from '../models/GraphSubjectQuery';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class SubjectQueryService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Search for Azure Devops users, or/and groups. Results will be returned in a batch with no more than 100 graph subjects.
     * @returns GraphSubject successful operation
     * @throws ApiError
     */
    public subjectQueryQuery({
        organization,
        body,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The query that we'll be using to search includes the following: Query: the search term. The search will be prefix matching only. SubjectKind: "User" or "Group" can be specified, both or either ScopeDescriptor: Non-default scope can be specified, i.e. project scope descriptor
         */
        body: GraphSubjectQuery,
    }): CancelablePromise<Array<GraphSubject>> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/_apis/graph/subjectquery',
            path: {
                'organization': organization,
            },
            body: body,
        });
    }
}
