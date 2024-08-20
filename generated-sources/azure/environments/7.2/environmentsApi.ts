/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { FetchHttpRequest } from './core/FetchHttpRequest';
import { EnvironmentaccesstokenService } from './services/EnvironmentaccesstokenService';
import { EnvironmentdeploymentrecordsService } from './services/EnvironmentdeploymentrecordsService';
import { EnvironmentsService } from './services/EnvironmentsService';
import { KubernetesService } from './services/KubernetesService';
import { PoolService } from './services/PoolService';
import { VmresourceService } from './services/VmresourceService';
type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;
export class environmentsApi {
    public readonly environmentaccesstoken: EnvironmentaccesstokenService;
    public readonly environmentdeploymentrecords: EnvironmentdeploymentrecordsService;
    public readonly environments: EnvironmentsService;
    public readonly kubernetes: KubernetesService;
    public readonly pool: PoolService;
    public readonly vmresource: VmresourceService;
    public readonly request: BaseHttpRequest;
    constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = FetchHttpRequest) {
        this.request = new HttpRequest({
            BASE: config?.BASE ?? 'https://dev.azure.com',
            VERSION: config?.VERSION ?? '7.2-preview',
            WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
            CREDENTIALS: config?.CREDENTIALS ?? 'include',
            TOKEN: config?.TOKEN,
            USERNAME: config?.USERNAME,
            PASSWORD: config?.PASSWORD,
            HEADERS: config?.HEADERS,
            ENCODE_PATH: config?.ENCODE_PATH,
        });
        this.environmentaccesstoken = new EnvironmentaccesstokenService(this.request);
        this.environmentdeploymentrecords = new EnvironmentdeploymentrecordsService(this.request);
        this.environments = new EnvironmentsService(this.request);
        this.kubernetes = new KubernetesService(this.request);
        this.pool = new PoolService(this.request);
        this.vmresource = new VmresourceService(this.request);
    }
}

