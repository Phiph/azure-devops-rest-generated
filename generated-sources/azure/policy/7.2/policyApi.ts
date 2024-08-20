/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { FetchHttpRequest } from './core/FetchHttpRequest';
import { ConfigurationsService } from './services/ConfigurationsService';
import { EvaluationsService } from './services/EvaluationsService';
import { RevisionsService } from './services/RevisionsService';
import { TypesService } from './services/TypesService';
type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;
export class policyApi {
    public readonly configurations: ConfigurationsService;
    public readonly evaluations: EvaluationsService;
    public readonly revisions: RevisionsService;
    public readonly types: TypesService;
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
        this.configurations = new ConfigurationsService(this.request);
        this.evaluations = new EvaluationsService(this.request);
        this.revisions = new RevisionsService(this.request);
        this.types = new TypesService(this.request);
    }
}

