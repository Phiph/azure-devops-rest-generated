/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GraphGroupCreationContext } from './GraphGroupCreationContext';
/**
 * Use this type to create a new Vsts group that is not backed by an external provider.
 */
export type GraphGroupVstsCreationContext = (GraphGroupCreationContext & {
    /**
     * For internal use only in back compat scenarios.
     */
    crossProject?: boolean;
    /**
     * Used by VSTS groups; if set this will be the group description, otherwise ignored
     */
    description?: string;
    descriptor?: string;
    /**
     * Used by VSTS groups; if set this will be the group DisplayName, otherwise ignored
     */
    displayName?: string;
    /**
     * For internal use only in back compat scenarios.
     */
    restrictedVisibility?: boolean;
    /**
     * For internal use only in back compat scenarios.
     */
    specialGroupType?: string;
});

