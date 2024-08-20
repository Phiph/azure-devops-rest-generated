/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Artifact } from './Artifact';
import type { ConfigurationVariableValue } from './ConfigurationVariableValue';
import type { IdentityRef } from './IdentityRef';
import type { PropertiesCollection } from './PropertiesCollection';
import type { ReleaseDefinitionEnvironment } from './ReleaseDefinitionEnvironment';
import type { ReleaseDefinitionShallowReference } from './ReleaseDefinitionShallowReference';
import type { ReleaseReference } from './ReleaseReference';
import type { ReleaseTriggerBase } from './ReleaseTriggerBase';
export type ReleaseDefinition = (ReleaseDefinitionShallowReference & {
    /**
     * Gets or sets the list of artifacts.
     */
    artifacts?: Array<Artifact>;
    /**
     * Gets or sets comment.
     */
    comment?: string;
    /**
     * Gets or sets the identity who created.
     */
    createdBy?: IdentityRef;
    /**
     * Gets date on which it got created.
     */
    createdOn?: string;
    /**
     * Gets or sets the description.
     */
    description?: string;
    /**
     * Gets or sets the list of environments.
     */
    environments?: Array<ReleaseDefinitionEnvironment>;
    /**
     * Whether release definition is deleted.
     */
    isDeleted?: boolean;
    /**
     * Gets the reference of last release.
     */
    lastRelease?: ReleaseReference;
    /**
     * Gets or sets the identity who modified.
     */
    modifiedBy?: IdentityRef;
    /**
     * Gets date on which it got modified.
     */
    modifiedOn?: string;
    /**
     * Gets or sets properties.
     */
    properties?: PropertiesCollection;
    /**
     * Gets or sets the release name format.
     */
    releaseNameFormat?: string;
    /**
     * Gets the revision number.
     */
    revision?: number;
    /**
     * Gets or sets source of release definition.
     */
    source?: 'undefined' | 'restApi' | 'userInterface' | 'ibiza' | 'portalExtensionApi';
    /**
     * Gets or sets list of tags.
     */
    tags?: Array<string>;
    /**
     * Gets or sets the list of triggers.
     */
    triggers?: Array<ReleaseTriggerBase>;
    /**
     * Gets or sets the list of variable groups.
     */
    variableGroups?: Array<number>;
    /**
     * Gets or sets the dictionary of variables.
     */
    variables?: Record<string, ConfigurationVariableValue>;
});

