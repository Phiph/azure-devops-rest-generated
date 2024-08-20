/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Deployment } from './Deployment';
import type { IdentityRef } from './IdentityRef';
import type { ManualIntervention } from './ManualIntervention';
import type { ProjectReference } from './ProjectReference';
import type { Release } from './Release';
import type { ReleaseApproval } from './ReleaseApproval';
export type DeploymentManualInterventionPendingEvent = {
    approval?: ReleaseApproval;
    deployment?: Deployment;
    emailRecipients?: Array<string>;
    environmentOwner?: IdentityRef;
    manualIntervention?: ManualIntervention;
    project?: ProjectReference;
    release?: Release;
};

