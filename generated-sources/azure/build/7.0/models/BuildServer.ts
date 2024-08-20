/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BuildAgentReference } from './BuildAgentReference';
import type { XamlBuildControllerReference } from './XamlBuildControllerReference';
export type BuildServer = {
    agents?: Array<BuildAgentReference>;
    controller?: XamlBuildControllerReference;
    id?: number;
    isVirtual?: boolean;
    messageQueueUrl?: string;
    name?: string;
    requireClientCertificates?: boolean;
    status?: 'online' | 'offline';
    statusChangedDate?: string;
    uri?: string;
    url?: string;
    version?: number;
};

