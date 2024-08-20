/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { FetchHttpRequest } from './core/FetchHttpRequest';
import { ApprovalsService } from './services/ApprovalsService';
import { AttachmentsService } from './services/AttachmentsService';
import { DefinitionsService } from './services/DefinitionsService';
import { DeploymentsService } from './services/DeploymentsService';
import { FoldersService } from './services/FoldersService';
import { GatesService } from './services/GatesService';
import { ManualInterventionsService } from './services/ManualInterventionsService';
import { ReleasesService } from './services/ReleasesService';
type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;
export class releaseApi {
    public readonly approvals: ApprovalsService;
    public readonly attachments: AttachmentsService;
    public readonly definitions: DefinitionsService;
    public readonly deployments: DeploymentsService;
    public readonly folders: FoldersService;
    public readonly gates: GatesService;
    public readonly manualInterventions: ManualInterventionsService;
    public readonly releases: ReleasesService;
    public readonly request: BaseHttpRequest;
    constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = FetchHttpRequest) {
        this.request = new HttpRequest({
            BASE: config?.BASE ?? 'https://vsrm.dev.azure.com',
            VERSION: config?.VERSION ?? '7.2-preview',
            WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
            CREDENTIALS: config?.CREDENTIALS ?? 'include',
            TOKEN: config?.TOKEN,
            USERNAME: config?.USERNAME,
            PASSWORD: config?.PASSWORD,
            HEADERS: config?.HEADERS,
            ENCODE_PATH: config?.ENCODE_PATH,
        });
        this.approvals = new ApprovalsService(this.request);
        this.attachments = new AttachmentsService(this.request);
        this.definitions = new DefinitionsService(this.request);
        this.deployments = new DeploymentsService(this.request);
        this.folders = new FoldersService(this.request);
        this.gates = new GatesService(this.request);
        this.manualInterventions = new ManualInterventionsService(this.request);
        this.releases = new ReleasesService(this.request);
    }
}

