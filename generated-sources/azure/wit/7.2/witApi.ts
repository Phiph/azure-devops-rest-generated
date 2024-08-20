/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { FetchHttpRequest } from './core/FetchHttpRequest';
import { AccountMyWorkRecentActivityService } from './services/AccountMyWorkRecentActivityService';
import { ArtifactLinkTypesService } from './services/ArtifactLinkTypesService';
import { ArtifactUriQueryService } from './services/ArtifactUriQueryService';
import { AttachmentsService } from './services/AttachmentsService';
import { ClassificationNodesService } from './services/ClassificationNodesService';
import { CommentReactionsEngagedUsersService } from './services/CommentReactionsEngagedUsersService';
import { CommentsService } from './services/CommentsService';
import { CommentsReactionsService } from './services/CommentsReactionsService';
import { CommentsVersionsService } from './services/CommentsVersionsService';
import { FieldsService } from './services/FieldsService';
import { ProjectProcessMigrationService } from './services/ProjectProcessMigrationService';
import { QueriesService } from './services/QueriesService';
import { RecyclebinService } from './services/RecyclebinService';
import { ReportingWorkItemLinksService } from './services/ReportingWorkItemLinksService';
import { ReportingWorkItemRevisionsService } from './services/ReportingWorkItemRevisionsService';
import { RevisionsService } from './services/RevisionsService';
import { SendMailService } from './services/SendMailService';
import { TagsService } from './services/TagsService';
import { TemplatesService } from './services/TemplatesService';
import { TempQueriesService } from './services/TempQueriesService';
import { UpdatesService } from './services/UpdatesService';
import { WiqlService } from './services/WiqlService';
import { WorkItemIconsService } from './services/WorkItemIconsService';
import { WorkItemRelationTypesService } from './services/WorkItemRelationTypesService';
import { WorkItemRevisionsDiscussionsService } from './services/WorkItemRevisionsDiscussionsService';
import { WorkItemsService } from './services/WorkItemsService';
import { WorkItemTransitionsService } from './services/WorkItemTransitionsService';
import { WorkItemTypeCategoriesService } from './services/WorkItemTypeCategoriesService';
import { WorkItemTypesService } from './services/WorkItemTypesService';
import { WorkItemTypesFieldService } from './services/WorkItemTypesFieldService';
import { WorkItemTypeStatesService } from './services/WorkItemTypeStatesService';
type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;
export class witApi {
    public readonly accountMyWorkRecentActivity: AccountMyWorkRecentActivityService;
    public readonly artifactLinkTypes: ArtifactLinkTypesService;
    public readonly artifactUriQuery: ArtifactUriQueryService;
    public readonly attachments: AttachmentsService;
    public readonly classificationNodes: ClassificationNodesService;
    public readonly commentReactionsEngagedUsers: CommentReactionsEngagedUsersService;
    public readonly comments: CommentsService;
    public readonly commentsReactions: CommentsReactionsService;
    public readonly commentsVersions: CommentsVersionsService;
    public readonly fields: FieldsService;
    public readonly projectProcessMigration: ProjectProcessMigrationService;
    public readonly queries: QueriesService;
    public readonly recyclebin: RecyclebinService;
    public readonly reportingWorkItemLinks: ReportingWorkItemLinksService;
    public readonly reportingWorkItemRevisions: ReportingWorkItemRevisionsService;
    public readonly revisions: RevisionsService;
    public readonly sendMail: SendMailService;
    public readonly tags: TagsService;
    public readonly templates: TemplatesService;
    public readonly tempQueries: TempQueriesService;
    public readonly updates: UpdatesService;
    public readonly wiql: WiqlService;
    public readonly workItemIcons: WorkItemIconsService;
    public readonly workItemRelationTypes: WorkItemRelationTypesService;
    public readonly workItemRevisionsDiscussions: WorkItemRevisionsDiscussionsService;
    public readonly workItems: WorkItemsService;
    public readonly workItemTransitions: WorkItemTransitionsService;
    public readonly workItemTypeCategories: WorkItemTypeCategoriesService;
    public readonly workItemTypes: WorkItemTypesService;
    public readonly workItemTypesField: WorkItemTypesFieldService;
    public readonly workItemTypeStates: WorkItemTypeStatesService;
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
        this.accountMyWorkRecentActivity = new AccountMyWorkRecentActivityService(this.request);
        this.artifactLinkTypes = new ArtifactLinkTypesService(this.request);
        this.artifactUriQuery = new ArtifactUriQueryService(this.request);
        this.attachments = new AttachmentsService(this.request);
        this.classificationNodes = new ClassificationNodesService(this.request);
        this.commentReactionsEngagedUsers = new CommentReactionsEngagedUsersService(this.request);
        this.comments = new CommentsService(this.request);
        this.commentsReactions = new CommentsReactionsService(this.request);
        this.commentsVersions = new CommentsVersionsService(this.request);
        this.fields = new FieldsService(this.request);
        this.projectProcessMigration = new ProjectProcessMigrationService(this.request);
        this.queries = new QueriesService(this.request);
        this.recyclebin = new RecyclebinService(this.request);
        this.reportingWorkItemLinks = new ReportingWorkItemLinksService(this.request);
        this.reportingWorkItemRevisions = new ReportingWorkItemRevisionsService(this.request);
        this.revisions = new RevisionsService(this.request);
        this.sendMail = new SendMailService(this.request);
        this.tags = new TagsService(this.request);
        this.templates = new TemplatesService(this.request);
        this.tempQueries = new TempQueriesService(this.request);
        this.updates = new UpdatesService(this.request);
        this.wiql = new WiqlService(this.request);
        this.workItemIcons = new WorkItemIconsService(this.request);
        this.workItemRelationTypes = new WorkItemRelationTypesService(this.request);
        this.workItemRevisionsDiscussions = new WorkItemRevisionsDiscussionsService(this.request);
        this.workItems = new WorkItemsService(this.request);
        this.workItemTransitions = new WorkItemTransitionsService(this.request);
        this.workItemTypeCategories = new WorkItemTypeCategoriesService(this.request);
        this.workItemTypes = new WorkItemTypesService(this.request);
        this.workItemTypesField = new WorkItemTypesFieldService(this.request);
        this.workItemTypeStates = new WorkItemTypeStatesService(this.request);
    }
}

