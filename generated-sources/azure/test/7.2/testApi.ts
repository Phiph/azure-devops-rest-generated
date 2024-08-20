/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { FetchHttpRequest } from './core/FetchHttpRequest';
import { AttachmentsService } from './services/AttachmentsService';
import { CodeCoverageService } from './services/CodeCoverageService';
import { IterationsService } from './services/IterationsService';
import { PointsService } from './services/PointsService';
import { ResultRetentionSettingsService } from './services/ResultRetentionSettingsService';
import { ResultsService } from './services/ResultsService';
import { RunsService } from './services/RunsService';
import { SessionService } from './services/SessionService';
import { TestCasesService } from './services/TestCasesService';
import { TestHistoryService } from './services/TestHistoryService';
import { TestSuitesService } from './services/TestSuitesService';
type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;
export class testApi {
    public readonly attachments: AttachmentsService;
    public readonly codeCoverage: CodeCoverageService;
    public readonly iterations: IterationsService;
    public readonly points: PointsService;
    public readonly resultRetentionSettings: ResultRetentionSettingsService;
    public readonly results: ResultsService;
    public readonly runs: RunsService;
    public readonly session: SessionService;
    public readonly testCases: TestCasesService;
    public readonly testHistory: TestHistoryService;
    public readonly testSuites: TestSuitesService;
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
        this.attachments = new AttachmentsService(this.request);
        this.codeCoverage = new CodeCoverageService(this.request);
        this.iterations = new IterationsService(this.request);
        this.points = new PointsService(this.request);
        this.resultRetentionSettings = new ResultRetentionSettingsService(this.request);
        this.results = new ResultsService(this.request);
        this.runs = new RunsService(this.request);
        this.session = new SessionService(this.request);
        this.testCases = new TestCasesService(this.request);
        this.testHistory = new TestHistoryService(this.request);
        this.testSuites = new TestSuitesService(this.request);
    }
}

