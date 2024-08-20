/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { FetchHttpRequest } from './core/FetchHttpRequest';
import { ActionsService } from './services/ActionsService';
import { AuditLogService } from './services/AuditLogService';
import { DownloadLogService } from './services/DownloadLogService';
import { StreamsService } from './services/StreamsService';
type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;
export class auditApi {
    public readonly actions: ActionsService;
    public readonly auditLog: AuditLogService;
    public readonly downloadLog: DownloadLogService;
    public readonly streams: StreamsService;
    public readonly request: BaseHttpRequest;
    constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = FetchHttpRequest) {
        this.request = new HttpRequest({
            BASE: config?.BASE ?? 'https://auditservice.dev.azure.com',
            VERSION: config?.VERSION ?? '7.2-preview',
            WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
            CREDENTIALS: config?.CREDENTIALS ?? 'include',
            TOKEN: config?.TOKEN,
            USERNAME: config?.USERNAME,
            PASSWORD: config?.PASSWORD,
            HEADERS: config?.HEADERS,
            ENCODE_PATH: config?.ENCODE_PATH,
        });
        this.actions = new ActionsService(this.request);
        this.auditLog = new AuditLogService(this.request);
        this.downloadLog = new DownloadLogService(this.request);
        this.streams = new StreamsService(this.request);
    }
}

