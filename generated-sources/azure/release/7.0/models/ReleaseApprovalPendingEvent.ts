/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApprovalOptions } from './ApprovalOptions';
import type { Deployment } from './Deployment';
import type { ReleaseApproval } from './ReleaseApproval';
import type { ReleaseEnvironment } from './ReleaseEnvironment';
export type ReleaseApprovalPendingEvent = {
    approval?: ReleaseApproval;
    approvalOptions?: ApprovalOptions;
    completedApprovals?: Array<ReleaseApproval>;
    definitionName?: string;
    deployment?: Deployment;
    environmentId?: number;
    environmentName?: string;
    environments?: Array<ReleaseEnvironment>;
    isMultipleRankApproval?: boolean;
    pendingApprovals?: Array<ReleaseApproval>;
    releaseCreator?: string;
    releaseName?: string;
    title?: string;
    webAccessUri?: string;
};

