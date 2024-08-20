/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { FetchHttpRequest } from './core/FetchHttpRequest';
import { ArtifactsService } from './services/ArtifactsService';
import { LogsService } from './services/LogsService';
import { PipelinesService } from './services/PipelinesService';
import { PreviewService } from './services/PreviewService';
import { RunsService } from './services/RunsService';
type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;
export class pipelinesApi {
    public readonly artifacts: ArtifactsService;
    public readonly logs: LogsService;
    public readonly pipelines: PipelinesService;
    public readonly preview: PreviewService;
    public readonly runs: RunsService;
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
        this.artifacts = new ArtifactsService(this.request);
        this.logs = new LogsService(this.request);
        this.pipelines = new PipelinesService(this.request);
        this.preview = new PreviewService(this.request);
        this.runs = new RunsService(this.request);
    }
}

