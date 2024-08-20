/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { FetchHttpRequest } from './core/FetchHttpRequest';
import { AvatarService } from './services/AvatarService';
import { CategorizedTeamsService } from './services/CategorizedTeamsService';
import { ProcessesService } from './services/ProcessesService';
import { ProjectsService } from './services/ProjectsService';
import { TeamsService } from './services/TeamsService';
type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;
export class coreApi {
    public readonly avatar: AvatarService;
    public readonly categorizedTeams: CategorizedTeamsService;
    public readonly processes: ProcessesService;
    public readonly projects: ProjectsService;
    public readonly teams: TeamsService;
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
        this.avatar = new AvatarService(this.request);
        this.categorizedTeams = new CategorizedTeamsService(this.request);
        this.processes = new ProcessesService(this.request);
        this.projects = new ProjectsService(this.request);
        this.teams = new TeamsService(this.request);
    }
}

