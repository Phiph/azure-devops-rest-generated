/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { FetchHttpRequest } from './core/FetchHttpRequest';
import { AccessControlEntriesService } from './services/AccessControlEntriesService';
import { AccessControlListsService } from './services/AccessControlListsService';
import { PermissionsService } from './services/PermissionsService';
import { SecurityNamespacesService } from './services/SecurityNamespacesService';
type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;
export class securityApi {
    public readonly accessControlEntries: AccessControlEntriesService;
    public readonly accessControlLists: AccessControlListsService;
    public readonly permissions: PermissionsService;
    public readonly securityNamespaces: SecurityNamespacesService;
    public readonly request: BaseHttpRequest;
    constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = FetchHttpRequest) {
        this.request = new HttpRequest({
            BASE: config?.BASE ?? 'https://dev.azure.com',
            VERSION: config?.VERSION ?? '7.0',
            WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
            CREDENTIALS: config?.CREDENTIALS ?? 'include',
            TOKEN: config?.TOKEN,
            USERNAME: config?.USERNAME,
            PASSWORD: config?.PASSWORD,
            HEADERS: config?.HEADERS,
            ENCODE_PATH: config?.ENCODE_PATH,
        });
        this.accessControlEntries = new AccessControlEntriesService(this.request);
        this.accessControlLists = new AccessControlListsService(this.request);
        this.permissions = new PermissionsService(this.request);
        this.securityNamespaces = new SecurityNamespacesService(this.request);
    }
}

