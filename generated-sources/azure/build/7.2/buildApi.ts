/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { FetchHttpRequest } from './core/FetchHttpRequest';
import { ArtifactsService } from './services/ArtifactsService';
import { AttachmentsService } from './services/AttachmentsService';
import { AuthorizedresourcesService } from './services/AuthorizedresourcesService';
import { BadgeService } from './services/BadgeService';
import { BuildsService } from './services/BuildsService';
import { ControllersService } from './services/ControllersService';
import { DefinitionsService } from './services/DefinitionsService';
import { FoldersService } from './services/FoldersService';
import { GeneralSettingsService } from './services/GeneralSettingsService';
import { HistoryService } from './services/HistoryService';
import { LatestService } from './services/LatestService';
import { LeasesService } from './services/LeasesService';
import { MetricsService } from './services/MetricsService';
import { OptionsService } from './services/OptionsService';
import { PropertiesService } from './services/PropertiesService';
import { ReportService } from './services/ReportService';
import { ResourcesService } from './services/ResourcesService';
import { ResourceUsageService } from './services/ResourceUsageService';
import { RetentionService } from './services/RetentionService';
import { SettingsService } from './services/SettingsService';
import { SourceProvidersService } from './services/SourceProvidersService';
import { StagesService } from './services/StagesService';
import { StatusService } from './services/StatusService';
import { TagsService } from './services/TagsService';
import { TemplatesService } from './services/TemplatesService';
import { TimelineService } from './services/TimelineService';
import { YamlService } from './services/YamlService';
type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;
export class buildApi {
    public readonly artifacts: ArtifactsService;
    public readonly attachments: AttachmentsService;
    public readonly authorizedresources: AuthorizedresourcesService;
    public readonly badge: BadgeService;
    public readonly builds: BuildsService;
    public readonly controllers: ControllersService;
    public readonly definitions: DefinitionsService;
    public readonly folders: FoldersService;
    public readonly generalSettings: GeneralSettingsService;
    public readonly history: HistoryService;
    public readonly latest: LatestService;
    public readonly leases: LeasesService;
    public readonly metrics: MetricsService;
    public readonly options: OptionsService;
    public readonly properties: PropertiesService;
    public readonly report: ReportService;
    public readonly resources: ResourcesService;
    public readonly resourceUsage: ResourceUsageService;
    public readonly retention: RetentionService;
    public readonly settings: SettingsService;
    public readonly sourceProviders: SourceProvidersService;
    public readonly stages: StagesService;
    public readonly status: StatusService;
    public readonly tags: TagsService;
    public readonly templates: TemplatesService;
    public readonly timeline: TimelineService;
    public readonly yaml: YamlService;
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
        this.artifacts = new ArtifactsService(this.request);
        this.attachments = new AttachmentsService(this.request);
        this.authorizedresources = new AuthorizedresourcesService(this.request);
        this.badge = new BadgeService(this.request);
        this.builds = new BuildsService(this.request);
        this.controllers = new ControllersService(this.request);
        this.definitions = new DefinitionsService(this.request);
        this.folders = new FoldersService(this.request);
        this.generalSettings = new GeneralSettingsService(this.request);
        this.history = new HistoryService(this.request);
        this.latest = new LatestService(this.request);
        this.leases = new LeasesService(this.request);
        this.metrics = new MetricsService(this.request);
        this.options = new OptionsService(this.request);
        this.properties = new PropertiesService(this.request);
        this.report = new ReportService(this.request);
        this.resources = new ResourcesService(this.request);
        this.resourceUsage = new ResourceUsageService(this.request);
        this.retention = new RetentionService(this.request);
        this.settings = new SettingsService(this.request);
        this.sourceProviders = new SourceProvidersService(this.request);
        this.stages = new StagesService(this.request);
        this.status = new StatusService(this.request);
        this.tags = new TagsService(this.request);
        this.templates = new TemplatesService(this.request);
        this.timeline = new TimelineService(this.request);
        this.yaml = new YamlService(this.request);
    }
}

