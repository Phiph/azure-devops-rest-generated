/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApprovalOptions } from './ApprovalOptions';
import type { Deployment } from './Deployment';
import type { DeploymentEvent } from './DeploymentEvent';
import type { ProjectReference } from './ProjectReference';
import type { Release } from './Release';
import type { ReleaseApproval } from './ReleaseApproval';
export type DeploymentApprovalPendingEvent = (DeploymentEvent & {
    approval?: ReleaseApproval;
    approvalOptions?: ApprovalOptions;
    completedApprovals?: Array<ReleaseApproval>;
    data?: Record<string, any>;
    deployment?: Deployment;
    isMultipleRankApproval?: boolean;
    pendingApprovals?: Array<ReleaseApproval>;
    project?: ProjectReference;
    release?: Release;
});

