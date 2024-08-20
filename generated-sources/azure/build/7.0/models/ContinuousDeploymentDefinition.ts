/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TeamProjectReference } from './TeamProjectReference';
import type { WebApiConnectedServiceRef } from './WebApiConnectedServiceRef';
import type { XamlDefinitionReference } from './XamlDefinitionReference';
export type ContinuousDeploymentDefinition = {
    /**
     * The connected service associated with the continuous deployment
     */
    connectedService?: WebApiConnectedServiceRef;
    /**
     * The definition associated with the continuous deployment
     */
    definition?: XamlDefinitionReference;
    gitBranch?: string;
    hostedServiceName?: string;
    project?: TeamProjectReference;
    repositoryId?: string;
    storageAccountName?: string;
    subscriptionId?: string;
    website?: string;
    webspace?: string;
};

