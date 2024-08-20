/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ReleaseEvent } from './ReleaseEvent';
export type DeploymentEvent = (ReleaseEvent & {
    attemptId?: number;
    stageName?: string;
});

