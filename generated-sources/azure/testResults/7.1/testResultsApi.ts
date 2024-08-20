/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { FetchHttpRequest } from './core/FetchHttpRequest';
import { AttachmentsService } from './services/AttachmentsService';
import { BugsService } from './services/BugsService';
import { CodecoverageService } from './services/CodecoverageService';
import { FilecoverageService } from './services/FilecoverageService';
import { HistoryService } from './services/HistoryService';
import { MessageLogsService } from './services/MessageLogsService';
import { MetricsService } from './services/MetricsService';
import { ResultdetailsbybuildService } from './services/ResultdetailsbybuildService';
import { ResultdetailsbyreleaseService } from './services/ResultdetailsbyreleaseService';
import { ResultDocumentService } from './services/ResultDocumentService';
import { ResultgroupsbybuildService } from './services/ResultgroupsbybuildService';
import { ResultgroupsbyreleaseService } from './services/ResultgroupsbyreleaseService';
import { ResultMetaDataService } from './services/ResultMetaDataService';
import { ResultsService } from './services/ResultsService';
import { ResultsbybuildService } from './services/ResultsbybuildService';
import { ResultsbypipelineService } from './services/ResultsbypipelineService';
import { ResultsbyreleaseService } from './services/ResultsbyreleaseService';
import { ResultsgroupDetailsService } from './services/ResultsgroupDetailsService';
import { ResultsummarybybuildService } from './services/ResultsummarybybuildService';
import { ResultsummarybypipelineService } from './services/ResultsummarybypipelineService';
import { ResultsummarybyreleaseService } from './services/ResultsummarybyreleaseService';
import { ResultsummarybyrequirementService } from './services/ResultsummarybyrequirementService';
import { ResultTrendByBuildService } from './services/ResultTrendByBuildService';
import { ResultTrendByReleaseService } from './services/ResultTrendByReleaseService';
import { RunsService } from './services/RunsService';
import { RunsummaryService } from './services/RunsummaryService';
import { SettingsService } from './services/SettingsService';
import { SimilarTestResultsService } from './services/SimilarTestResultsService';
import { StatisticsService } from './services/StatisticsService';
import { StatusService } from './services/StatusService';
import { TagsService } from './services/TagsService';
import { TagsummaryService } from './services/TagsummaryService';
import { TestattachmentsService } from './services/TestattachmentsService';
import { TestfailuretypeService } from './services/TestfailuretypeService';
import { TestHistoryService } from './services/TestHistoryService';
import { TestlogService } from './services/TestlogService';
import { TestlogstoreendpointService } from './services/TestlogstoreendpointService';
import { TestsettingsService } from './services/TestsettingsService';
import { WorkitemsService } from './services/WorkitemsService';
type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;
export class testResultsApi {
    public readonly attachments: AttachmentsService;
    public readonly bugs: BugsService;
    public readonly codecoverage: CodecoverageService;
    public readonly filecoverage: FilecoverageService;
    public readonly history: HistoryService;
    public readonly messageLogs: MessageLogsService;
    public readonly metrics: MetricsService;
    public readonly resultdetailsbybuild: ResultdetailsbybuildService;
    public readonly resultdetailsbyrelease: ResultdetailsbyreleaseService;
    public readonly resultDocument: ResultDocumentService;
    public readonly resultgroupsbybuild: ResultgroupsbybuildService;
    public readonly resultgroupsbyrelease: ResultgroupsbyreleaseService;
    public readonly resultMetaData: ResultMetaDataService;
    public readonly results: ResultsService;
    public readonly resultsbybuild: ResultsbybuildService;
    public readonly resultsbypipeline: ResultsbypipelineService;
    public readonly resultsbyrelease: ResultsbyreleaseService;
    public readonly resultsgroupDetails: ResultsgroupDetailsService;
    public readonly resultsummarybybuild: ResultsummarybybuildService;
    public readonly resultsummarybypipeline: ResultsummarybypipelineService;
    public readonly resultsummarybyrelease: ResultsummarybyreleaseService;
    public readonly resultsummarybyrequirement: ResultsummarybyrequirementService;
    public readonly resultTrendByBuild: ResultTrendByBuildService;
    public readonly resultTrendByRelease: ResultTrendByReleaseService;
    public readonly runs: RunsService;
    public readonly runsummary: RunsummaryService;
    public readonly settings: SettingsService;
    public readonly similarTestResults: SimilarTestResultsService;
    public readonly statistics: StatisticsService;
    public readonly status: StatusService;
    public readonly tags: TagsService;
    public readonly tagsummary: TagsummaryService;
    public readonly testattachments: TestattachmentsService;
    public readonly testfailuretype: TestfailuretypeService;
    public readonly testHistory: TestHistoryService;
    public readonly testlog: TestlogService;
    public readonly testlogstoreendpoint: TestlogstoreendpointService;
    public readonly testsettings: TestsettingsService;
    public readonly workitems: WorkitemsService;
    public readonly request: BaseHttpRequest;
    constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = FetchHttpRequest) {
        this.request = new HttpRequest({
            BASE: config?.BASE ?? 'https://vstmr.dev.azure.com',
            VERSION: config?.VERSION ?? '7.1-preview',
            WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
            CREDENTIALS: config?.CREDENTIALS ?? 'include',
            TOKEN: config?.TOKEN,
            USERNAME: config?.USERNAME,
            PASSWORD: config?.PASSWORD,
            HEADERS: config?.HEADERS,
            ENCODE_PATH: config?.ENCODE_PATH,
        });
        this.attachments = new AttachmentsService(this.request);
        this.bugs = new BugsService(this.request);
        this.codecoverage = new CodecoverageService(this.request);
        this.filecoverage = new FilecoverageService(this.request);
        this.history = new HistoryService(this.request);
        this.messageLogs = new MessageLogsService(this.request);
        this.metrics = new MetricsService(this.request);
        this.resultdetailsbybuild = new ResultdetailsbybuildService(this.request);
        this.resultdetailsbyrelease = new ResultdetailsbyreleaseService(this.request);
        this.resultDocument = new ResultDocumentService(this.request);
        this.resultgroupsbybuild = new ResultgroupsbybuildService(this.request);
        this.resultgroupsbyrelease = new ResultgroupsbyreleaseService(this.request);
        this.resultMetaData = new ResultMetaDataService(this.request);
        this.results = new ResultsService(this.request);
        this.resultsbybuild = new ResultsbybuildService(this.request);
        this.resultsbypipeline = new ResultsbypipelineService(this.request);
        this.resultsbyrelease = new ResultsbyreleaseService(this.request);
        this.resultsgroupDetails = new ResultsgroupDetailsService(this.request);
        this.resultsummarybybuild = new ResultsummarybybuildService(this.request);
        this.resultsummarybypipeline = new ResultsummarybypipelineService(this.request);
        this.resultsummarybyrelease = new ResultsummarybyreleaseService(this.request);
        this.resultsummarybyrequirement = new ResultsummarybyrequirementService(this.request);
        this.resultTrendByBuild = new ResultTrendByBuildService(this.request);
        this.resultTrendByRelease = new ResultTrendByReleaseService(this.request);
        this.runs = new RunsService(this.request);
        this.runsummary = new RunsummaryService(this.request);
        this.settings = new SettingsService(this.request);
        this.similarTestResults = new SimilarTestResultsService(this.request);
        this.statistics = new StatisticsService(this.request);
        this.status = new StatusService(this.request);
        this.tags = new TagsService(this.request);
        this.tagsummary = new TagsummaryService(this.request);
        this.testattachments = new TestattachmentsService(this.request);
        this.testfailuretype = new TestfailuretypeService(this.request);
        this.testHistory = new TestHistoryService(this.request);
        this.testlog = new TestlogService(this.request);
        this.testlogstoreendpoint = new TestlogstoreendpointService(this.request);
        this.testsettings = new TestsettingsService(this.request);
        this.workitems = new WorkitemsService(this.request);
    }
}

