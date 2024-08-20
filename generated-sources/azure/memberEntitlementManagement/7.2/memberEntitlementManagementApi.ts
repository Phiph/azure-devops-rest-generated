/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { FetchHttpRequest } from './core/FetchHttpRequest';
import { GroupEntitlementsService } from './services/GroupEntitlementsService';
import { MemberEntitlementsService } from './services/MemberEntitlementsService';
import { MembersService } from './services/MembersService';
import { ServicePrincipalEntitlementsService } from './services/ServicePrincipalEntitlementsService';
import { UserEntitlementsService } from './services/UserEntitlementsService';
import { UserEntitlementSummaryService } from './services/UserEntitlementSummaryService';
type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;
export class memberEntitlementManagementApi {
    public readonly groupEntitlements: GroupEntitlementsService;
    public readonly memberEntitlements: MemberEntitlementsService;
    public readonly members: MembersService;
    public readonly servicePrincipalEntitlements: ServicePrincipalEntitlementsService;
    public readonly userEntitlements: UserEntitlementsService;
    public readonly userEntitlementSummary: UserEntitlementSummaryService;
    public readonly request: BaseHttpRequest;
    constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = FetchHttpRequest) {
        this.request = new HttpRequest({
            BASE: config?.BASE ?? 'https://vsaex.dev.azure.com',
            VERSION: config?.VERSION ?? '7.2-preview',
            WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
            CREDENTIALS: config?.CREDENTIALS ?? 'include',
            TOKEN: config?.TOKEN,
            USERNAME: config?.USERNAME,
            PASSWORD: config?.PASSWORD,
            HEADERS: config?.HEADERS,
            ENCODE_PATH: config?.ENCODE_PATH,
        });
        this.groupEntitlements = new GroupEntitlementsService(this.request);
        this.memberEntitlements = new MemberEntitlementsService(this.request);
        this.members = new MembersService(this.request);
        this.servicePrincipalEntitlements = new ServicePrincipalEntitlementsService(this.request);
        this.userEntitlements = new UserEntitlementsService(this.request);
        this.userEntitlementSummary = new UserEntitlementSummaryService(this.request);
    }
}

