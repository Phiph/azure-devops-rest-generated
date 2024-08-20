/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { FetchHttpRequest } from './core/FetchHttpRequest';
import { BranchesService } from './services/BranchesService';
import { ChangesetsService } from './services/ChangesetsService';
import { ItemsService } from './services/ItemsService';
import { LabelsService } from './services/LabelsService';
import { ShelvesetsService } from './services/ShelvesetsService';
type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;
export class tfvcApi {
    public readonly branches: BranchesService;
    public readonly changesets: ChangesetsService;
    public readonly items: ItemsService;
    public readonly labels: LabelsService;
    public readonly shelvesets: ShelvesetsService;
    public readonly request: BaseHttpRequest;
    constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = FetchHttpRequest) {
        this.request = new HttpRequest({
            BASE: config?.BASE ?? 'https://dev.azure.com',
            VERSION: config?.VERSION ?? '7.0',
            WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
            CREDENTIALS: config?.CREDENTIALS ?? 'include',
            TOKEN: config?.TOKEN,
            USERNAME: config?.USERNAME,
            PASSWORD: config?.PASSWORD,
            HEADERS: config?.HEADERS,
            ENCODE_PATH: config?.ENCODE_PATH,
        });
        this.branches = new BranchesService(this.request);
        this.changesets = new ChangesetsService(this.request);
        this.items = new ItemsService(this.request);
        this.labels = new LabelsService(this.request);
        this.shelvesets = new ShelvesetsService(this.request);
    }
}

