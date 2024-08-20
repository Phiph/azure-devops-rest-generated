/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GraphMembership } from '../models/GraphMembership';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class MembershipsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get all the memberships where this descriptor is a member in the relationship.
     *
     * The default value for direction is 'up' meaning return all memberships where the subject is a member (e.g. all groups the subject is a member of).
     * Alternatively, passing the direction as 'down' will return all memberships where the subject is a container (e.g. all members of the subject group).
     * @returns GraphMembership successful operation
     * @throws ApiError
     */
    public membershipsList({
        organization,
        subjectDescriptor,
        direction,
        depth,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Fetch all direct memberships of this descriptor.
         */
        subjectDescriptor: string,
        /**
         * Defaults to Up.
         */
        direction?: 'unknown' | 'down' | 'up',
        /**
         * The maximum number of edges to traverse up or down the membership tree. Currently the only supported value is '1'.
         */
        depth?: number,
    }): CancelablePromise<Array<GraphMembership>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/graph/Memberships/{subjectDescriptor}',
            path: {
                'organization': organization,
                'subjectDescriptor': subjectDescriptor,
            },
            query: {
                'direction': direction,
                'depth': depth,
            },
        });
    }
    /**
     * Create a new membership between a container and subject.
     * @returns GraphMembership successful operation
     * @throws ApiError
     */
    public membershipsAdd({
        organization,
        subjectDescriptor,
        containerDescriptor,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * A descriptor to a group or user that can be the child subject in the relationship.
         */
        subjectDescriptor: string,
        /**
         * A descriptor to a group that can be the container in the relationship.
         */
        containerDescriptor: string,
    }): CancelablePromise<GraphMembership> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/{organization}/_apis/graph/memberships/{subjectDescriptor}/{containerDescriptor}',
            path: {
                'organization': organization,
                'subjectDescriptor': subjectDescriptor,
                'containerDescriptor': containerDescriptor,
            },
        });
    }
    /**
     * Check to see if a membership relationship between a container and subject exists.
     * @returns any The operation succeeded. Membership exists.
     * @throws ApiError
     */
    public membershipsCheckMembershipExistence({
        organization,
        subjectDescriptor,
        containerDescriptor,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The group or user that is a child subject of the relationship.
         */
        subjectDescriptor: string,
        /**
         * The group that is the container in the relationship.
         */
        containerDescriptor: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'HEAD',
            url: '/{organization}/_apis/graph/memberships/{subjectDescriptor}/{containerDescriptor}',
            path: {
                'organization': organization,
                'subjectDescriptor': subjectDescriptor,
                'containerDescriptor': containerDescriptor,
            },
            errors: {
                404: `Membership does not exist.`,
            },
        });
    }
    /**
     * Get a membership relationship between a container and subject.
     * @returns GraphMembership successful operation
     * @throws ApiError
     */
    public membershipsGet({
        organization,
        subjectDescriptor,
        containerDescriptor,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * A descriptor to the child subject in the relationship.
         */
        subjectDescriptor: string,
        /**
         * A descriptor to the container in the relationship.
         */
        containerDescriptor: string,
    }): CancelablePromise<GraphMembership> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/graph/memberships/{subjectDescriptor}/{containerDescriptor}',
            path: {
                'organization': organization,
                'subjectDescriptor': subjectDescriptor,
                'containerDescriptor': containerDescriptor,
            },
        });
    }
    /**
     * Deletes a membership between a container and subject.
     * @returns any successful operation
     * @throws ApiError
     */
    public membershipsRemoveMembership({
        organization,
        subjectDescriptor,
        containerDescriptor,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * A descriptor to a group or user that is the child subject in the relationship.
         */
        subjectDescriptor: string,
        /**
         * A descriptor to a group that is the container in the relationship.
         */
        containerDescriptor: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/{organization}/_apis/graph/memberships/{subjectDescriptor}/{containerDescriptor}',
            path: {
                'organization': organization,
                'subjectDescriptor': subjectDescriptor,
                'containerDescriptor': containerDescriptor,
            },
        });
    }
}
