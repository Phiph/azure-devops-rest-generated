/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { FetchHttpRequest } from './core/FetchHttpRequest';
import { DashboardsService } from './services/DashboardsService';
import { WidgetsService } from './services/WidgetsService';
import { WidgetTypesService } from './services/WidgetTypesService';
type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;
export class dashboardApi {
    public readonly dashboards: DashboardsService;
    public readonly widgets: WidgetsService;
    public readonly widgetTypes: WidgetTypesService;
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
        this.dashboards = new DashboardsService(this.request);
        this.widgets = new WidgetsService(this.request);
        this.widgetTypes = new WidgetTypesService(this.request);
    }
}

