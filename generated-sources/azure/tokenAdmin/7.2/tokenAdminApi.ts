/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { FetchHttpRequest } from './core/FetchHttpRequest';
import { PersonalAccessTokensService } from './services/PersonalAccessTokensService';
import { RevocationRulesService } from './services/RevocationRulesService';
import { RevocationsService } from './services/RevocationsService';
type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;
export class tokenAdminApi {
    public readonly personalAccessTokens: PersonalAccessTokensService;
    public readonly revocationRules: RevocationRulesService;
    public readonly revocations: RevocationsService;
    public readonly request: BaseHttpRequest;
    constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = FetchHttpRequest) {
        this.request = new HttpRequest({
            BASE: config?.BASE ?? 'https://vssps.dev.azure.com',
            VERSION: config?.VERSION ?? '7.2-preview',
            WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
            CREDENTIALS: config?.CREDENTIALS ?? 'include',
            TOKEN: config?.TOKEN,
            USERNAME: config?.USERNAME,
            PASSWORD: config?.PASSWORD,
            HEADERS: config?.HEADERS,
            ENCODE_PATH: config?.ENCODE_PATH,
        });
        this.personalAccessTokens = new PersonalAccessTokensService(this.request);
        this.revocationRules = new RevocationRulesService(this.request);
        this.revocations = new RevocationsService(this.request);
    }
}

