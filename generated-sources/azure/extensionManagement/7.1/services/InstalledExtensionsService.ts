/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { InstalledExtension } from '../models/InstalledExtension';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class InstalledExtensionsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * List the installed extensions in the account / project collection.
     * @returns InstalledExtension successful operation
     * @throws ApiError
     */
    public installedExtensionsList({
        organization,
        includeDisabledExtensions,
        includeErrors,
        assetTypes,
        includeInstallationIssues,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * If true (the default), include disabled extensions in the results.
         */
        includeDisabledExtensions?: boolean,
        /**
         * If true, include installed extensions with errors.
         */
        includeErrors?: boolean,
        /**
         * Determines which files are returned in the files array.  Provide the wildcard '*' to return all files, or a colon separated list to retrieve files with specific asset types.
         */
        assetTypes?: string,
        includeInstallationIssues?: boolean,
    }): CancelablePromise<Array<InstalledExtension>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/extensionmanagement/installedextensions',
            path: {
                'organization': organization,
            },
            query: {
                'includeDisabledExtensions': includeDisabledExtensions,
                'includeErrors': includeErrors,
                'assetTypes': assetTypes,
                'includeInstallationIssues': includeInstallationIssues,
            },
        });
    }
    /**
     * Update an installed extension. Typically this API is used to enable or disable an extension.
     * @returns InstalledExtension successful operation
     * @throws ApiError
     */
    public installedExtensionsUpdate({
        organization,
        body,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        body: InstalledExtension,
    }): CancelablePromise<InstalledExtension> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/{organization}/_apis/extensionmanagement/installedextensions',
            path: {
                'organization': organization,
            },
            body: body,
        });
    }
    /**
     * Get an installed extension by its publisher and extension name.
     * @returns InstalledExtension successful operation
     * @throws ApiError
     */
    public installedExtensionsGet({
        organization,
        publisherName,
        extensionName,
        assetTypes,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Name of the publisher. Example: "fabrikam".
         */
        publisherName: string,
        /**
         * Name of the extension. Example: "ops-tools".
         */
        extensionName: string,
        /**
         * Determines which files are returned in the files array.  Provide the wildcard '*' to return all files, or a colon separated list to retrieve files with specific asset types.
         */
        assetTypes?: string,
    }): CancelablePromise<InstalledExtension> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/extensionmanagement/installedextensionsbyname/{publisherName}/{extensionName}',
            path: {
                'organization': organization,
                'publisherName': publisherName,
                'extensionName': extensionName,
            },
            query: {
                'assetTypes': assetTypes,
            },
        });
    }
    /**
     * Uninstall the specified extension from the account / project collection.
     * @returns any successful operation
     * @throws ApiError
     */
    public installedExtensionsUninstallExtensionByName({
        organization,
        publisherName,
        extensionName,
        reason,
        reasonCode,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Name of the publisher. Example: "fabrikam".
         */
        publisherName: string,
        /**
         * Name of the extension. Example: "ops-tools".
         */
        extensionName: string,
        reason?: string,
        reasonCode?: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/{organization}/_apis/extensionmanagement/installedextensionsbyname/{publisherName}/{extensionName}',
            path: {
                'organization': organization,
                'publisherName': publisherName,
                'extensionName': extensionName,
            },
            query: {
                'reason': reason,
                'reasonCode': reasonCode,
            },
        });
    }
    /**
     * Install the specified extension into the account / project collection.
     * @returns InstalledExtension successful operation
     * @throws ApiError
     */
    public installedExtensionsInstallExtensionByName({
        organization,
        publisherName,
        extensionName,
        version,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Name of the publisher. Example: "fabrikam".
         */
        publisherName: string,
        /**
         * Name of the extension. Example: "ops-tools".
         */
        extensionName: string,
        version: string,
    }): CancelablePromise<InstalledExtension> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/_apis/extensionmanagement/installedextensionsbyname/{publisherName}/{extensionName}/{version}',
            path: {
                'organization': organization,
                'publisherName': publisherName,
                'extensionName': extensionName,
                'version': version,
            },
        });
    }
}
