/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { FetchHttpRequest } from './core/FetchHttpRequest';
import { ResultMetaDataService } from './services/ResultMetaDataService';
import { TestlogService } from './services/TestlogService';
import { TestlogstoreendpointService } from './services/TestlogstoreendpointService';
type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;
export class testResultsApi {
    public readonly resultMetaData: ResultMetaDataService;
    public readonly testlog: TestlogService;
    public readonly testlogstoreendpoint: TestlogstoreendpointService;
    public readonly request: BaseHttpRequest;
    constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = FetchHttpRequest) {
        this.request = new HttpRequest({
            BASE: config?.BASE ?? 'https://vstmr.dev.azure.com',
            VERSION: config?.VERSION ?? '7.0',
            WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
            CREDENTIALS: config?.CREDENTIALS ?? 'include',
            TOKEN: config?.TOKEN,
            USERNAME: config?.USERNAME,
            PASSWORD: config?.PASSWORD,
            HEADERS: config?.HEADERS,
            ENCODE_PATH: config?.ENCODE_PATH,
        });
        this.resultMetaData = new ResultMetaDataService(this.request);
        this.testlog = new TestlogService(this.request);
        this.testlogstoreendpoint = new TestlogstoreendpointService(this.request);
    }
}

