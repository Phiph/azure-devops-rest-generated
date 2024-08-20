/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { FetchHttpRequest } from './core/FetchHttpRequest';
import { EndpointproxyService } from './services/EndpointproxyService';
import { EndpointsService } from './services/EndpointsService';
import { ExecutionhistoryService } from './services/ExecutionhistoryService';
import { TypesService } from './services/TypesService';
type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;
export class serviceEndpointApi {
    public readonly endpointproxy: EndpointproxyService;
    public readonly endpoints: EndpointsService;
    public readonly executionhistory: ExecutionhistoryService;
    public readonly types: TypesService;
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
        this.endpointproxy = new EndpointproxyService(this.request);
        this.endpoints = new EndpointsService(this.request);
        this.executionhistory = new ExecutionhistoryService(this.request);
        this.types = new TypesService(this.request);
    }
}

