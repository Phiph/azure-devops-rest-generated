/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GitDeletedRepository } from '../models/GitDeletedRepository';
import type { GitRecycleBinRepositoryDetails } from '../models/GitRecycleBinRepositoryDetails';
import type { GitRepository } from '../models/GitRepository';
import type { GitRepositoryCreateOptions } from '../models/GitRepositoryCreateOptions';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class RepositoriesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Retrieve deleted git repositories.
     * @returns GitDeletedRepository successful operation
     * @throws ApiError
     */
    public repositoriesGetDeletedRepositories({
        organization,
        project,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Project ID or project name
         */
        project: string,
    }): CancelablePromise<Array<GitDeletedRepository>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/git/deletedrepositories',
            path: {
                'organization': organization,
                'project': project,
            },
        });
    }
    /**
     * Retrieve soft-deleted git repositories from the recycle bin.
     * @returns GitDeletedRepository successful operation
     * @throws ApiError
     */
    public repositoriesGetRecycleBinRepositories({
        organization,
        project,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Project ID or project name
         */
        project: string,
    }): CancelablePromise<Array<GitDeletedRepository>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/git/recycleBin/repositories',
            path: {
                'organization': organization,
                'project': project,
            },
        });
    }
    /**
     * Destroy (hard delete) a soft-deleted Git repository.
     * @returns any successful operation
     * @throws ApiError
     */
    public repositoriesDeleteRepositoryFromRecycleBin({
        organization,
        project,
        repositoryId,
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
         * The ID of the repository.
         */
        repositoryId: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/{organization}/{project}/_apis/git/recycleBin/repositories/{repositoryId}',
            path: {
                'organization': organization,
                'project': project,
                'repositoryId': repositoryId,
            },
        });
    }
    /**
     * Recover a soft-deleted Git repository. Recently deleted repositories go into a soft-delete state for a period of time before they are hard deleted and become unrecoverable.
     * @returns GitRepository successful operation
     * @throws ApiError
     */
    public repositoriesRestoreRepositoryFromRecycleBin({
        organization,
        body,
        project,
        repositoryId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        body: GitRecycleBinRepositoryDetails,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * The ID of the repository.
         */
        repositoryId: string,
    }): CancelablePromise<GitRepository> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/{organization}/{project}/_apis/git/recycleBin/repositories/{repositoryId}',
            path: {
                'organization': organization,
                'project': project,
                'repositoryId': repositoryId,
            },
            body: body,
        });
    }
    /**
     * Create a git repository in a team project.
     * @returns GitRepository Created
     * @throws ApiError
     */
    public repositoriesCreate({
        organization,
        body,
        project,
        sourceRef,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Specify the repo name, team project and/or parent repository. Team project information can be omitted from gitRepositoryToCreate if the request is project-scoped (i.e., includes project Id).
         */
        body: GitRepositoryCreateOptions,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * [optional] Specify the source refs to use while creating a fork repo
         */
        sourceRef?: string,
    }): CancelablePromise<GitRepository> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/{project}/_apis/git/repositories',
            path: {
                'organization': organization,
                'project': project,
            },
            query: {
                'sourceRef': sourceRef,
            },
            body: body,
        });
    }
    /**
     * Retrieve git repositories.
     * @returns GitRepository successful operation
     * @throws ApiError
     */
    public repositoriesList({
        organization,
        project,
        includeLinks,
        includeAllUrls,
        includeHidden,
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
         * [optional] True to include reference links. The default value is false.
         */
        includeLinks?: boolean,
        /**
         * [optional] True to include all remote URLs. The default value is false.
         */
        includeAllUrls?: boolean,
        /**
         * [optional] True to include hidden repositories. The default value is false.
         */
        includeHidden?: boolean,
    }): CancelablePromise<Array<GitRepository>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/git/repositories',
            path: {
                'organization': organization,
                'project': project,
            },
            query: {
                'includeLinks': includeLinks,
                'includeAllUrls': includeAllUrls,
                'includeHidden': includeHidden,
            },
        });
    }
    /**
     * Delete a git repository
     * @returns any successful operation
     * @throws ApiError
     */
    public repositoriesDelete({
        organization,
        repositoryId,
        project,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The ID of the repository.
         */
        repositoryId: string,
        /**
         * Project ID or project name
         */
        project: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/{organization}/{project}/_apis/git/repositories/{repositoryId}',
            path: {
                'organization': organization,
                'repositoryId': repositoryId,
                'project': project,
            },
        });
    }
    /**
     * Retrieve a git repository.
     * @returns GitRepository successful operation
     * @throws ApiError
     */
    public repositoriesGetRepository({
        organization,
        repositoryId,
        project,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The name or ID of the repository.
         */
        repositoryId: string,
        /**
         * Project ID or project name
         */
        project: string,
    }): CancelablePromise<GitRepository> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/git/repositories/{repositoryId}',
            path: {
                'organization': organization,
                'repositoryId': repositoryId,
                'project': project,
            },
        });
    }
    /**
     * Updates the Git repository with either a new repo name or a new default branch.
     * @returns GitRepository The operation succeeded. The response contains the updated repository information.
     * @throws ApiError
     */
    public repositoriesUpdate({
        organization,
        body,
        repositoryId,
        project,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Specify a new repo name or a new default branch of the repository
         */
        body: GitRepository,
        /**
         * The ID of the repository.
         */
        repositoryId: string,
        /**
         * Project ID or project name
         */
        project: string,
    }): CancelablePromise<GitRepository> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/{organization}/{project}/_apis/git/repositories/{repositoryId}',
            path: {
                'organization': organization,
                'repositoryId': repositoryId,
                'project': project,
            },
            body: body,
        });
    }
}
