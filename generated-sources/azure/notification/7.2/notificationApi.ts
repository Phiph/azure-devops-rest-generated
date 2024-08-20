/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { FetchHttpRequest } from './core/FetchHttpRequest';
import { DiagnosticLogsService } from './services/DiagnosticLogsService';
import { DiagnosticsService } from './services/DiagnosticsService';
import { EventTypesService } from './services/EventTypesService';
import { SettingsService } from './services/SettingsService';
import { SubscribersService } from './services/SubscribersService';
import { SubscriptionsService } from './services/SubscriptionsService';
type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;
export class notificationApi {
    public readonly diagnosticLogs: DiagnosticLogsService;
    public readonly diagnostics: DiagnosticsService;
    public readonly eventTypes: EventTypesService;
    public readonly settings: SettingsService;
    public readonly subscribers: SubscribersService;
    public readonly subscriptions: SubscriptionsService;
    public readonly request: BaseHttpRequest;
    constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = FetchHttpRequest) {
        this.request = new HttpRequest({
            BASE: config?.BASE ?? 'https://{service}dev.azure.com',
            VERSION: config?.VERSION ?? '7.2-preview',
            WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
            CREDENTIALS: config?.CREDENTIALS ?? 'include',
            TOKEN: config?.TOKEN,
            USERNAME: config?.USERNAME,
            PASSWORD: config?.PASSWORD,
            HEADERS: config?.HEADERS,
            ENCODE_PATH: config?.ENCODE_PATH,
        });
        this.diagnosticLogs = new DiagnosticLogsService(this.request);
        this.diagnostics = new DiagnosticsService(this.request);
        this.eventTypes = new EventTypesService(this.request);
        this.settings = new SettingsService(this.request);
        this.subscribers = new SubscribersService(this.request);
        this.subscriptions = new SubscriptionsService(this.request);
    }
}

