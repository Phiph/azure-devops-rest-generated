/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { FetchHttpRequest } from './core/FetchHttpRequest';
import { BehaviorsService } from './services/BehaviorsService';
import { ControlsService } from './services/ControlsService';
import { FieldsService } from './services/FieldsService';
import { GroupsService } from './services/GroupsService';
import { LayoutService } from './services/LayoutService';
import { ListsService } from './services/ListsService';
import { PagesService } from './services/PagesService';
import { ProcessesService } from './services/ProcessesService';
import { RulesService } from './services/RulesService';
import { StatesService } from './services/StatesService';
import { SystemControlsService } from './services/SystemControlsService';
import { WorkItemTypesService } from './services/WorkItemTypesService';
import { WorkItemTypesBehaviorsService } from './services/WorkItemTypesBehaviorsService';
type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;
export class processesApi {
    public readonly behaviors: BehaviorsService;
    public readonly controls: ControlsService;
    public readonly fields: FieldsService;
    public readonly groups: GroupsService;
    public readonly layout: LayoutService;
    public readonly lists: ListsService;
    public readonly pages: PagesService;
    public readonly processes: ProcessesService;
    public readonly rules: RulesService;
    public readonly states: StatesService;
    public readonly systemControls: SystemControlsService;
    public readonly workItemTypes: WorkItemTypesService;
    public readonly workItemTypesBehaviors: WorkItemTypesBehaviorsService;
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
        this.behaviors = new BehaviorsService(this.request);
        this.controls = new ControlsService(this.request);
        this.fields = new FieldsService(this.request);
        this.groups = new GroupsService(this.request);
        this.layout = new LayoutService(this.request);
        this.lists = new ListsService(this.request);
        this.pages = new PagesService(this.request);
        this.processes = new ProcessesService(this.request);
        this.rules = new RulesService(this.request);
        this.states = new StatesService(this.request);
        this.systemControls = new SystemControlsService(this.request);
        this.workItemTypes = new WorkItemTypesService(this.request);
        this.workItemTypesBehaviors = new WorkItemTypesBehaviorsService(this.request);
    }
}

