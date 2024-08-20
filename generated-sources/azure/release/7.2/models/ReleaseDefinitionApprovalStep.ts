/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IdentityRef } from './IdentityRef';
import type { ReleaseDefinitionEnvironmentStep } from './ReleaseDefinitionEnvironmentStep';
export type ReleaseDefinitionApprovalStep = (ReleaseDefinitionEnvironmentStep & {
    /**
     * Gets and sets the approver.
     */
    approver?: IdentityRef;
    /**
     * Indicates whether the approval automated.
     */
    isAutomated?: boolean;
    /**
     * Indicates whether the approval notification set.
     */
    isNotificationOn?: boolean;
    /**
     * Gets or sets the rank of approval step.
     */
    rank?: number;
});

