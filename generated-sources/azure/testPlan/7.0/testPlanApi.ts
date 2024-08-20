/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { FetchHttpRequest } from './core/FetchHttpRequest';
import { ConfigurationsService } from './services/ConfigurationsService';
import { SuiteTestCaseService } from './services/SuiteTestCaseService';
import { TestCaseCloneService } from './services/TestCaseCloneService';
import { TestCasesService } from './services/TestCasesService';
import { TestPlanCloneService } from './services/TestPlanCloneService';
import { TestPlansService } from './services/TestPlansService';
import { TestPointService } from './services/TestPointService';
import { TestSuiteCloneService } from './services/TestSuiteCloneService';
import { TestSuiteEntryService } from './services/TestSuiteEntryService';
import { TestSuitesService } from './services/TestSuitesService';
import { VariablesService } from './services/VariablesService';
type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;
export class testPlanApi {
    public readonly configurations: ConfigurationsService;
    public readonly suiteTestCase: SuiteTestCaseService;
    public readonly testCaseClone: TestCaseCloneService;
    public readonly testCases: TestCasesService;
    public readonly testPlanClone: TestPlanCloneService;
    public readonly testPlans: TestPlansService;
    public readonly testPoint: TestPointService;
    public readonly testSuiteClone: TestSuiteCloneService;
    public readonly testSuiteEntry: TestSuiteEntryService;
    public readonly testSuites: TestSuitesService;
    public readonly variables: VariablesService;
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
        this.configurations = new ConfigurationsService(this.request);
        this.suiteTestCase = new SuiteTestCaseService(this.request);
        this.testCaseClone = new TestCaseCloneService(this.request);
        this.testCases = new TestCasesService(this.request);
        this.testPlanClone = new TestPlanCloneService(this.request);
        this.testPlans = new TestPlansService(this.request);
        this.testPoint = new TestPointService(this.request);
        this.testSuiteClone = new TestSuiteCloneService(this.request);
        this.testSuiteEntry = new TestSuiteEntryService(this.request);
        this.testSuites = new TestSuitesService(this.request);
        this.variables = new VariablesService(this.request);
    }
}

