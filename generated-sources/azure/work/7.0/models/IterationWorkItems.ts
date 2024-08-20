/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TeamSettingsDataContractBase } from './TeamSettingsDataContractBase';
import type { WorkItemLink } from './WorkItemLink';
/**
 * Represents work items in an iteration backlog
 */
export type IterationWorkItems = (TeamSettingsDataContractBase & {
    /**
     * Work item relations
     */
    workItemRelations?: Array<WorkItemLink>;
});

