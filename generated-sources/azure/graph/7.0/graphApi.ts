/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { FetchHttpRequest } from './core/FetchHttpRequest';
import { AvatarsService } from './services/AvatarsService';
import { DescriptorsService } from './services/DescriptorsService';
import { GroupsService } from './services/GroupsService';
import { MembershipsService } from './services/MembershipsService';
import { MembershipStatesService } from './services/MembershipStatesService';
import { ProviderInfoService } from './services/ProviderInfoService';
import { RequestAccessService } from './services/RequestAccessService';
import { StorageKeysService } from './services/StorageKeysService';
import { SubjectLookupService } from './services/SubjectLookupService';
import { SubjectQueryService } from './services/SubjectQueryService';
import { UsersService } from './services/UsersService';
type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;
export class graphApi {
    public readonly avatars: AvatarsService;
    public readonly descriptors: DescriptorsService;
    public readonly groups: GroupsService;
    public readonly memberships: MembershipsService;
    public readonly membershipStates: MembershipStatesService;
    public readonly providerInfo: ProviderInfoService;
    public readonly requestAccess: RequestAccessService;
    public readonly storageKeys: StorageKeysService;
    public readonly subjectLookup: SubjectLookupService;
    public readonly subjectQuery: SubjectQueryService;
    public readonly users: UsersService;
    public readonly request: BaseHttpRequest;
    constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = FetchHttpRequest) {
        this.request = new HttpRequest({
            BASE: config?.BASE ?? 'https://vssps.dev.azure.com',
            VERSION: config?.VERSION ?? '7.0',
            WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
            CREDENTIALS: config?.CREDENTIALS ?? 'include',
            TOKEN: config?.TOKEN,
            USERNAME: config?.USERNAME,
            PASSWORD: config?.PASSWORD,
            HEADERS: config?.HEADERS,
            ENCODE_PATH: config?.ENCODE_PATH,
        });
        this.avatars = new AvatarsService(this.request);
        this.descriptors = new DescriptorsService(this.request);
        this.groups = new GroupsService(this.request);
        this.memberships = new MembershipsService(this.request);
        this.membershipStates = new MembershipStatesService(this.request);
        this.providerInfo = new ProviderInfoService(this.request);
        this.requestAccess = new RequestAccessService(this.request);
        this.storageKeys = new StorageKeysService(this.request);
        this.subjectLookup = new SubjectLookupService(this.request);
        this.subjectQuery = new SubjectQueryService(this.request);
        this.users = new UsersService(this.request);
    }
}

