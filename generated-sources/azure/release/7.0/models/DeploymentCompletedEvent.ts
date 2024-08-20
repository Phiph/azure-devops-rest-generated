/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Deployment } from './Deployment';
import type { DeploymentEvent } from './DeploymentEvent';
import type { ProjectReference } from './ProjectReference';
import type { ReleaseEnvironment } from './ReleaseEnvironment';
export type DeploymentCompletedEvent = (DeploymentEvent & {
    comment?: string;
    data?: Record<string, any>;
    deployment?: Deployment;
    environment?: ReleaseEnvironment;
    project?: ProjectReference;
});

