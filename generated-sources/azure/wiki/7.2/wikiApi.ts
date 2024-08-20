/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { FetchHttpRequest } from './core/FetchHttpRequest';
import { AttachmentsService } from './services/AttachmentsService';
import { PageMovesService } from './services/PageMovesService';
import { PagesService } from './services/PagesService';
import { PagesBatchService } from './services/PagesBatchService';
import { PageStatsService } from './services/PageStatsService';
import { WikisService } from './services/WikisService';
type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;
export class wikiApi {
    public readonly attachments: AttachmentsService;
    public readonly pageMoves: PageMovesService;
    public readonly pages: PagesService;
    public readonly pagesBatch: PagesBatchService;
    public readonly pageStats: PageStatsService;
    public readonly wikis: WikisService;
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
        this.attachments = new AttachmentsService(this.request);
        this.pageMoves = new PageMovesService(this.request);
        this.pages = new PagesService(this.request);
        this.pagesBatch = new PagesBatchService(this.request);
        this.pageStats = new PageStatsService(this.request);
        this.wikis = new WikisService(this.request);
    }
}

