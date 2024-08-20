/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { FetchHttpRequest } from './core/FetchHttpRequest';
import { PermissionsReportService } from './services/PermissionsReportService';
import { PermissionsReportDownloadService } from './services/PermissionsReportDownloadService';
type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;
export class permissionsReportApi {
    public readonly permissionsReport: PermissionsReportService;
    public readonly permissionsReportDownload: PermissionsReportDownloadService;
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
        this.permissionsReport = new PermissionsReportService(this.request);
        this.permissionsReportDownload = new PermissionsReportDownloadService(this.request);
    }
}

