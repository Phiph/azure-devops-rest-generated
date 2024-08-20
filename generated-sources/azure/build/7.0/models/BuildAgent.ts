/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { XamlBuildControllerReference } from './XamlBuildControllerReference';
import type { XamlBuildServerReference } from './XamlBuildServerReference';
export type BuildAgent = {
    buildDirectory?: string;
    controller?: XamlBuildControllerReference;
    createdDate?: string;
    description?: string;
    enabled?: boolean;
    id?: number;
    messageQueueUrl?: string;
    name?: string;
    reservedForBuild?: string;
    server?: XamlBuildServerReference;
    status?: 'unavailable' | 'available' | 'offline';
    statusMessage?: string;
    updatedDate?: string;
    uri?: string;
    url?: string;
};

