/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GraphSubject } from '../models/GraphSubject';
import type { GraphSubjectLookup } from '../models/GraphSubjectLookup';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class SubjectLookupService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Resolve descriptors to users, groups or scopes (Subjects) in a batch.
     * @returns GraphSubject successful operation
     * @throws ApiError
     */
    public subjectLookupLookupSubjects({
        organization,
        body,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * A list of descriptors that specifies a subset of subjects to retrieve. Each descriptor uniquely identifies the subject across all instance scopes, but only at a single point in time.
         */
        body: GraphSubjectLookup,
    }): CancelablePromise<Record<string, GraphSubject>> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/_apis/graph/subjectlookup',
            path: {
                'organization': organization,
            },
            body: body,
        });
    }
}
