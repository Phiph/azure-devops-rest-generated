/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { FetchHttpRequest } from './core/FetchHttpRequest';
import { AnnotatedTagsService } from './services/AnnotatedTagsService';
import { BlobsService } from './services/BlobsService';
import { CherryPicksService } from './services/CherryPicksService';
import { CommitsService } from './services/CommitsService';
import { DiffsService } from './services/DiffsService';
import { ForksService } from './services/ForksService';
import { ImportRequestsService } from './services/ImportRequestsService';
import { ItemsService } from './services/ItemsService';
import { MergeBasesService } from './services/MergeBasesService';
import { MergesService } from './services/MergesService';
import { PolicyConfigurationsService } from './services/PolicyConfigurationsService';
import { PullRequestAttachmentsService } from './services/PullRequestAttachmentsService';
import { PullRequestCommentLikesService } from './services/PullRequestCommentLikesService';
import { PullRequestCommitsService } from './services/PullRequestCommitsService';
import { PullRequestIterationChangesService } from './services/PullRequestIterationChangesService';
import { PullRequestIterationsService } from './services/PullRequestIterationsService';
import { PullRequestIterationStatusesService } from './services/PullRequestIterationStatusesService';
import { PullRequestLabelsService } from './services/PullRequestLabelsService';
import { PullRequestPropertiesService } from './services/PullRequestPropertiesService';
import { PullRequestQueryService } from './services/PullRequestQueryService';
import { PullRequestReviewersService } from './services/PullRequestReviewersService';
import { PullRequestsService } from './services/PullRequestsService';
import { PullRequestShareService } from './services/PullRequestShareService';
import { PullRequestStatusesService } from './services/PullRequestStatusesService';
import { PullRequestThreadCommentsService } from './services/PullRequestThreadCommentsService';
import { PullRequestThreadsService } from './services/PullRequestThreadsService';
import { PullRequestWorkItemsService } from './services/PullRequestWorkItemsService';
import { PushesService } from './services/PushesService';
import { RefsService } from './services/RefsService';
import { RefsFavoritesService } from './services/RefsFavoritesService';
import { RepositoriesService } from './services/RepositoriesService';
import { RevertsService } from './services/RevertsService';
import { StatsService } from './services/StatsService';
import { StatusesService } from './services/StatusesService';
import { SuggestionsService } from './services/SuggestionsService';
import { TreesService } from './services/TreesService';
type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;
export class gitApi {
    public readonly annotatedTags: AnnotatedTagsService;
    public readonly blobs: BlobsService;
    public readonly cherryPicks: CherryPicksService;
    public readonly commits: CommitsService;
    public readonly diffs: DiffsService;
    public readonly forks: ForksService;
    public readonly importRequests: ImportRequestsService;
    public readonly items: ItemsService;
    public readonly mergeBases: MergeBasesService;
    public readonly merges: MergesService;
    public readonly policyConfigurations: PolicyConfigurationsService;
    public readonly pullRequestAttachments: PullRequestAttachmentsService;
    public readonly pullRequestCommentLikes: PullRequestCommentLikesService;
    public readonly pullRequestCommits: PullRequestCommitsService;
    public readonly pullRequestIterationChanges: PullRequestIterationChangesService;
    public readonly pullRequestIterations: PullRequestIterationsService;
    public readonly pullRequestIterationStatuses: PullRequestIterationStatusesService;
    public readonly pullRequestLabels: PullRequestLabelsService;
    public readonly pullRequestProperties: PullRequestPropertiesService;
    public readonly pullRequestQuery: PullRequestQueryService;
    public readonly pullRequestReviewers: PullRequestReviewersService;
    public readonly pullRequests: PullRequestsService;
    public readonly pullRequestShare: PullRequestShareService;
    public readonly pullRequestStatuses: PullRequestStatusesService;
    public readonly pullRequestThreadComments: PullRequestThreadCommentsService;
    public readonly pullRequestThreads: PullRequestThreadsService;
    public readonly pullRequestWorkItems: PullRequestWorkItemsService;
    public readonly pushes: PushesService;
    public readonly refs: RefsService;
    public readonly refsFavorites: RefsFavoritesService;
    public readonly repositories: RepositoriesService;
    public readonly reverts: RevertsService;
    public readonly stats: StatsService;
    public readonly statuses: StatusesService;
    public readonly suggestions: SuggestionsService;
    public readonly trees: TreesService;
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
        this.annotatedTags = new AnnotatedTagsService(this.request);
        this.blobs = new BlobsService(this.request);
        this.cherryPicks = new CherryPicksService(this.request);
        this.commits = new CommitsService(this.request);
        this.diffs = new DiffsService(this.request);
        this.forks = new ForksService(this.request);
        this.importRequests = new ImportRequestsService(this.request);
        this.items = new ItemsService(this.request);
        this.mergeBases = new MergeBasesService(this.request);
        this.merges = new MergesService(this.request);
        this.policyConfigurations = new PolicyConfigurationsService(this.request);
        this.pullRequestAttachments = new PullRequestAttachmentsService(this.request);
        this.pullRequestCommentLikes = new PullRequestCommentLikesService(this.request);
        this.pullRequestCommits = new PullRequestCommitsService(this.request);
        this.pullRequestIterationChanges = new PullRequestIterationChangesService(this.request);
        this.pullRequestIterations = new PullRequestIterationsService(this.request);
        this.pullRequestIterationStatuses = new PullRequestIterationStatusesService(this.request);
        this.pullRequestLabels = new PullRequestLabelsService(this.request);
        this.pullRequestProperties = new PullRequestPropertiesService(this.request);
        this.pullRequestQuery = new PullRequestQueryService(this.request);
        this.pullRequestReviewers = new PullRequestReviewersService(this.request);
        this.pullRequests = new PullRequestsService(this.request);
        this.pullRequestShare = new PullRequestShareService(this.request);
        this.pullRequestStatuses = new PullRequestStatusesService(this.request);
        this.pullRequestThreadComments = new PullRequestThreadCommentsService(this.request);
        this.pullRequestThreads = new PullRequestThreadsService(this.request);
        this.pullRequestWorkItems = new PullRequestWorkItemsService(this.request);
        this.pushes = new PushesService(this.request);
        this.refs = new RefsService(this.request);
        this.refsFavorites = new RefsFavoritesService(this.request);
        this.repositories = new RepositoriesService(this.request);
        this.reverts = new RevertsService(this.request);
        this.stats = new StatsService(this.request);
        this.statuses = new StatusesService(this.request);
        this.suggestions = new SuggestionsService(this.request);
        this.trees = new TreesService(this.request);
    }
}

