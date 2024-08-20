/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { FetchHttpRequest } from './core/FetchHttpRequest';
import { AvailabilityService } from './services/AvailabilityService';
import { ClientService } from './services/ClientService';
import { ContentsService } from './services/ContentsService';
import { RequestsService } from './services/RequestsService';
import { SymsrvService } from './services/SymsrvService';
type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;
export class symbolApi {
    public readonly availability: AvailabilityService;
    public readonly client: ClientService;
    public readonly contents: ContentsService;
    public readonly requests: RequestsService;
    public readonly symsrv: SymsrvService;
    public readonly request: BaseHttpRequest;
    constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = FetchHttpRequest) {
        this.request = new HttpRequest({
            BASE: config?.BASE ?? 'https://artifacts.dev.azure.com',
            VERSION: config?.VERSION ?? '7.2-preview',
            WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
            CREDENTIALS: config?.CREDENTIALS ?? 'include',
            TOKEN: config?.TOKEN,
            USERNAME: config?.USERNAME,
            PASSWORD: config?.PASSWORD,
            HEADERS: config?.HEADERS,
            ENCODE_PATH: config?.ENCODE_PATH,
        });
        this.availability = new AvailabilityService(this.request);
        this.client = new ClientService(this.request);
        this.contents = new ContentsService(this.request);
        this.requests = new RequestsService(this.request);
        this.symsrv = new SymsrvService(this.request);
    }
}

