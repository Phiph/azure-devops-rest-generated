/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { FetchHttpRequest } from './core/FetchHttpRequest';
import { ConsumersService } from './services/ConsumersService';
import { DiagnosticsService } from './services/DiagnosticsService';
import { NotificationsService } from './services/NotificationsService';
import { PublishersService } from './services/PublishersService';
import { SubscriptionsService } from './services/SubscriptionsService';
type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;
export class hooksApi {
    public readonly consumers: ConsumersService;
    public readonly diagnostics: DiagnosticsService;
    public readonly notifications: NotificationsService;
    public readonly publishers: PublishersService;
    public readonly subscriptions: SubscriptionsService;
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
        this.consumers = new ConsumersService(this.request);
        this.diagnostics = new DiagnosticsService(this.request);
        this.notifications = new NotificationsService(this.request);
        this.publishers = new PublishersService(this.request);
        this.subscriptions = new SubscriptionsService(this.request);
    }
}

