/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { FetchHttpRequest } from './core/FetchHttpRequest';
import { BehaviorsService } from './services/BehaviorsService';
import { ProcessesService } from './services/ProcessesService';
type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;
export class processadminApi {
    public readonly behaviors: BehaviorsService;
    public readonly processes: ProcessesService;
    public readonly request: BaseHttpRequest;
    constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = FetchHttpRequest) {
        this.request = new HttpRequest({
            BASE: config?.BASE ?? 'https://dev.azure.com',
            VERSION: config?.VERSION ?? '7.1-preview',
            WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
            CREDENTIALS: config?.CREDENTIALS ?? 'include',
            TOKEN: config?.TOKEN,
            USERNAME: config?.USERNAME,
            PASSWORD: config?.PASSWORD,
            HEADERS: config?.HEADERS,
            ENCODE_PATH: config?.ENCODE_PATH,
        });
        this.behaviors = new BehaviorsService(this.request);
        this.processes = new ProcessesService(this.request);
    }
}

