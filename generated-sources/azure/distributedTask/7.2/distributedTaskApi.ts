/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { FetchHttpRequest } from './core/FetchHttpRequest';
import { AgentcloudsService } from './services/AgentcloudsService';
import { AgentcloudtypesService } from './services/AgentcloudtypesService';
import { AgentsService } from './services/AgentsService';
import { DeploymentgroupsService } from './services/DeploymentgroupsService';
import { PoolpermissionsService } from './services/PoolpermissionsService';
import { PoolsService } from './services/PoolsService';
import { QueuesService } from './services/QueuesService';
import { RequestsService } from './services/RequestsService';
import { TargetsService } from './services/TargetsService';
import { TaskgroupsService } from './services/TaskgroupsService';
import { VariablegroupsService } from './services/VariablegroupsService';
import { YamlschemaService } from './services/YamlschemaService';
type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;
export class distributedTaskApi {
    public readonly agentclouds: AgentcloudsService;
    public readonly agentcloudtypes: AgentcloudtypesService;
    public readonly agents: AgentsService;
    public readonly deploymentgroups: DeploymentgroupsService;
    public readonly poolpermissions: PoolpermissionsService;
    public readonly pools: PoolsService;
    public readonly queues: QueuesService;
    public readonly requests: RequestsService;
    public readonly targets: TargetsService;
    public readonly taskgroups: TaskgroupsService;
    public readonly variablegroups: VariablegroupsService;
    public readonly yamlschema: YamlschemaService;
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
        this.agentclouds = new AgentcloudsService(this.request);
        this.agentcloudtypes = new AgentcloudtypesService(this.request);
        this.agents = new AgentsService(this.request);
        this.deploymentgroups = new DeploymentgroupsService(this.request);
        this.poolpermissions = new PoolpermissionsService(this.request);
        this.pools = new PoolsService(this.request);
        this.queues = new QueuesService(this.request);
        this.requests = new RequestsService(this.request);
        this.targets = new TargetsService(this.request);
        this.taskgroups = new TaskgroupsService(this.request);
        this.variablegroups = new VariablegroupsService(this.request);
        this.yamlschema = new YamlschemaService(this.request);
    }
}

