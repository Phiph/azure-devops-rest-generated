/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { FetchHttpRequest } from './core/FetchHttpRequest';
import { CodeSearchResultsService } from './services/CodeSearchResultsService';
import { PackageSearchResultsService } from './services/PackageSearchResultsService';
import { RepositoriesService } from './services/RepositoriesService';
import { TfvcService } from './services/TfvcService';
import { WikiSearchResultsService } from './services/WikiSearchResultsService';
import { WorkItemSearchResultsService } from './services/WorkItemSearchResultsService';
type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;
export class searchApi {
    public readonly codeSearchResults: CodeSearchResultsService;
    public readonly packageSearchResults: PackageSearchResultsService;
    public readonly repositories: RepositoriesService;
    public readonly tfvc: TfvcService;
    public readonly wikiSearchResults: WikiSearchResultsService;
    public readonly workItemSearchResults: WorkItemSearchResultsService;
    public readonly request: BaseHttpRequest;
    constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = FetchHttpRequest) {
        this.request = new HttpRequest({
            BASE: config?.BASE ?? 'https://almsearch.dev.azure.com',
            VERSION: config?.VERSION ?? '7.0',
            WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
            CREDENTIALS: config?.CREDENTIALS ?? 'include',
            TOKEN: config?.TOKEN,
            USERNAME: config?.USERNAME,
            PASSWORD: config?.PASSWORD,
            HEADERS: config?.HEADERS,
            ENCODE_PATH: config?.ENCODE_PATH,
        });
        this.codeSearchResults = new CodeSearchResultsService(this.request);
        this.packageSearchResults = new PackageSearchResultsService(this.request);
        this.repositories = new RepositoriesService(this.request);
        this.tfvc = new TfvcService(this.request);
        this.wikiSearchResults = new WikiSearchResultsService(this.request);
        this.workItemSearchResults = new WorkItemSearchResultsService(this.request);
    }
}

