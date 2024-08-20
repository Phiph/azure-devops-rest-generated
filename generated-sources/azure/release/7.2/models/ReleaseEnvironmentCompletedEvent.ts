/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IdentityRef } from './IdentityRef';
import type { ReleaseEnvironment } from './ReleaseEnvironment';
export type ReleaseEnvironmentCompletedEvent = {
    createdByName?: string;
    definitionId?: number;
    definitionName?: string;
    environment?: ReleaseEnvironment;
    environmentId?: number;
    projectName?: string;
    reason?: 'none' | 'manual' | 'automated' | 'scheduled' | 'redeployTrigger';
    releaseCreatedBy?: IdentityRef;
    releaseLogsUri?: string;
    releaseName?: string;
    status?: string;
    title?: string;
    webAccessUri?: string;
};

