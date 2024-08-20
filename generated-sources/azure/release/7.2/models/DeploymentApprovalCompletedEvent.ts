/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DeploymentEvent } from './DeploymentEvent';
import type { ProjectReference } from './ProjectReference';
import type { Release } from './Release';
import type { ReleaseApproval } from './ReleaseApproval';
export type DeploymentApprovalCompletedEvent = (DeploymentEvent & {
    approval?: ReleaseApproval;
    project?: ProjectReference;
    release?: Release;
});

