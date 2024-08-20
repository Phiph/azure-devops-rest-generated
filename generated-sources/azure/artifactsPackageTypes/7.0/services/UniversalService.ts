/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Package } from '../models/Package';
import type { PackageVersionDetails } from '../models/PackageVersionDetails';
import type { UPackPackagesBatchRequest } from '../models/UPackPackagesBatchRequest';
import type { UPackPackageVersionDeletionState } from '../models/UPackPackageVersionDeletionState';
import type { UPackRecycleBinPackageVersionDetails } from '../models/UPackRecycleBinPackageVersionDetails';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class UniversalService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Delete a package version from a feed's recycle bin.
     *
     * The project parameter must be supplied if the feed was created in a project.
     * If the feed is not associated with any project, omit the project parameter from the request.
     * @returns Package successful operation
     * @throws ApiError
     */
    public universalDeletePackageVersion({
        organization,
        feedId,
        packageName,
        packageVersion,
        project,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Name or ID of the feed.
         */
        feedId: string,
        /**
         * Name of the package.
         */
        packageName: string,
        /**
         * Version of the package.
         */
        packageVersion: string,
        /**
         * Project ID or project name
         */
        project: string,
    }): CancelablePromise<Package> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/{organization}/{project}/_apis/packaging/feeds/{feedId}/upack/packages/{packageName}/versions/{packageVersion}',
            path: {
                'organization': organization,
                'feedId': feedId,
                'packageName': packageName,
                'packageVersion': packageVersion,
                'project': project,
            },
        });
    }
    /**
     * Show information about a package version.
     *
     * The project parameter must be supplied if the feed was created in a project.
     * If the feed is not associated with any project, omit the project parameter from the request.
     * @returns Package successful operation
     * @throws ApiError
     */
    public universalGetPackageVersion({
        organization,
        feedId,
        packageName,
        packageVersion,
        project,
        showDeleted,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Name or ID of the feed.
         */
        feedId: string,
        /**
         * Name of the package.
         */
        packageName: string,
        /**
         * Version of the package.
         */
        packageVersion: string,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * True to show information for deleted versions
         */
        showDeleted?: boolean,
    }): CancelablePromise<Package> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/packaging/feeds/{feedId}/upack/packages/{packageName}/versions/{packageVersion}',
            path: {
                'organization': organization,
                'feedId': feedId,
                'packageName': packageName,
                'packageVersion': packageVersion,
                'project': project,
            },
            query: {
                'showDeleted': showDeleted,
            },
        });
    }
    /**
     * Update information for a package version.
     *
     * The project parameter must be supplied if the feed was created in a project.
     * If the feed is not associated with any project, omit the project parameter from the request.
     * @returns any successful operation
     * @throws ApiError
     */
    public universalUpdatePackageVersion({
        organization,
        body,
        feedId,
        packageName,
        packageVersion,
        project,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        body: PackageVersionDetails,
        /**
         * Name or ID of the feed.
         */
        feedId: string,
        /**
         * Name of the package.
         */
        packageName: string,
        /**
         * Version of the package.
         */
        packageVersion: string,
        /**
         * Project ID or project name
         */
        project: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/{organization}/{project}/_apis/packaging/feeds/{feedId}/upack/packages/{packageName}/versions/{packageVersion}',
            path: {
                'organization': organization,
                'feedId': feedId,
                'packageName': packageName,
                'packageVersion': packageVersion,
                'project': project,
            },
            body: body,
        });
    }
    /**
     * Update several packages from a single feed in a single request. The updates to the packages do not happen atomically.
     *
     * The project parameter must be supplied if the feed was created in a project.
     * If the feed is not associated with any project, omit the project parameter from the request.
     * @returns any successful operation
     * @throws ApiError
     */
    public universalUpdatePackageVersions({
        organization,
        body,
        feedId,
        project,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Information about the packages to update, the operation to perform, and its associated data.
         */
        body: UPackPackagesBatchRequest,
        /**
         * Name or ID of the feed.
         */
        feedId: string,
        /**
         * Project ID or project name
         */
        project: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/{project}/_apis/packaging/feeds/{feedId}/upack/packagesbatch',
            path: {
                'organization': organization,
                'feedId': feedId,
                'project': project,
            },
            body: body,
        });
    }
    /**
     * Delete a package version from the recycle bin.
     *
     * The project parameter must be supplied if the feed was created in a project.
     * If the feed is not associated with any project, omit the project parameter from the request.
     * @returns any successful operation
     * @throws ApiError
     */
    public universalDeletePackageVersionFromRecycleBin({
        organization,
        feedId,
        packageName,
        packageVersion,
        project,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Name or ID of the feed.
         */
        feedId: string,
        /**
         * Name of the package.
         */
        packageName: string,
        /**
         * Version of the package.
         */
        packageVersion: string,
        /**
         * Project ID or project name
         */
        project: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/{organization}/{project}/_apis/packaging/feeds/{feedId}/upack/RecycleBin/packages/{packageName}/versions/{packageVersion}',
            path: {
                'organization': organization,
                'feedId': feedId,
                'packageName': packageName,
                'packageVersion': packageVersion,
                'project': project,
            },
        });
    }
    /**
     * Get information about a package version in the recycle bin.
     *
     * The project parameter must be supplied if the feed was created in a project.
     * If the feed is not associated with any project, omit the project parameter from the request.
     * @returns UPackPackageVersionDeletionState successful operation
     * @throws ApiError
     */
    public universalGetPackageVersionFromRecycleBin({
        organization,
        feedId,
        packageName,
        packageVersion,
        project,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Name or ID of the feed.
         */
        feedId: string,
        /**
         * Name of the package.
         */
        packageName: string,
        /**
         * Version of the package.
         */
        packageVersion: string,
        /**
         * Project ID or project name
         */
        project: string,
    }): CancelablePromise<UPackPackageVersionDeletionState> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/packaging/feeds/{feedId}/upack/RecycleBin/packages/{packageName}/versions/{packageVersion}',
            path: {
                'organization': organization,
                'feedId': feedId,
                'packageName': packageName,
                'packageVersion': packageVersion,
                'project': project,
            },
        });
    }
    /**
     * Restore a package version from the recycle bin to its associated feed.
     *
     * The project parameter must be supplied if the feed was created in a project.
     * If the feed is not associated with any project, omit the project parameter from the request.
     * @returns any successful operation
     * @throws ApiError
     */
    public universalRestorePackageVersionFromRecycleBin({
        organization,
        body,
        feedId,
        packageName,
        packageVersion,
        project,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Set the 'Deleted' property to 'false' to restore the package.
         */
        body: UPackRecycleBinPackageVersionDetails,
        /**
         * Name or ID of the feed.
         */
        feedId: string,
        /**
         * Name of the package.
         */
        packageName: string,
        /**
         * Version of the package.
         */
        packageVersion: string,
        /**
         * Project ID or project name
         */
        project: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/{organization}/{project}/_apis/packaging/feeds/{feedId}/upack/RecycleBin/packages/{packageName}/versions/{packageVersion}',
            path: {
                'organization': organization,
                'feedId': feedId,
                'packageName': packageName,
                'packageVersion': packageVersion,
                'project': project,
            },
            body: body,
        });
    }
    /**
     * Delete or restore several package versions from the recycle bin.
     *
     * The project parameter must be supplied if the feed was created in a project.
     * If the feed is not associated with any project, omit the project parameter from the request.
     * @returns any successful operation
     * @throws ApiError
     */
    public universalUpdateRecycleBinPackageVersions({
        organization,
        body,
        feedId,
        project,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Information about the packages to update, the operation to perform, and its associated data. <c>Operation</c> must be <c>PermanentDelete</c> or <c>RestoreToFeed</c>
         */
        body: UPackPackagesBatchRequest,
        /**
         * Feed which contains the packages to update.
         */
        feedId: string,
        /**
         * Project ID or project name
         */
        project: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/{project}/_apis/packaging/feeds/{feedId}/upack/RecycleBin/packagesBatch',
            path: {
                'organization': organization,
                'feedId': feedId,
                'project': project,
            },
            body: body,
        });
    }
}
