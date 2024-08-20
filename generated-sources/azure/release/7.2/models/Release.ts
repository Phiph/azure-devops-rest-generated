/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Artifact } from './Artifact';
import type { ConfigurationVariableValue } from './ConfigurationVariableValue';
import type { IdentityRef } from './IdentityRef';
import type { ProjectReference } from './ProjectReference';
import type { PropertiesCollection } from './PropertiesCollection';
import type { ReferenceLinks } from './ReferenceLinks';
import type { ReleaseDefinitionShallowReference } from './ReleaseDefinitionShallowReference';
import type { ReleaseEnvironment } from './ReleaseEnvironment';
import type { VariableGroup } from './VariableGroup';
export type Release = {
    /**
     * Gets links to access the release.
     */
    _links?: ReferenceLinks;
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
     * Gets or sets the identity for whom release was created.
     */
    createdFor?: IdentityRef;
    /**
     * Gets date on which it got created.
     */
    createdOn?: string;
    /**
     * Gets revision number of definition snapshot.
     */
    definitionSnapshotRevision?: number;
    /**
     * Gets or sets description of release.
     */
    description?: string;
    /**
     * Gets list of environments.
     */
    environments?: Array<ReleaseEnvironment>;
    /**
     * Gets the unique identifier of this field.
     */
    id?: number;
    /**
     * Whether to exclude the release from retention policies.
     */
    keepForever?: boolean;
    /**
     * Gets logs container url.
     */
    logsContainerUrl?: string;
    /**
     * Gets or sets the identity who modified.
     */
    modifiedBy?: IdentityRef;
    /**
     * Gets date on which it got modified.
     */
    modifiedOn?: string;
    /**
     * Gets name.
     */
    name?: string;
    /**
     * Gets pool name.
     */
    poolName?: string;
    /**
     * Gets or sets project reference.
     */
    projectReference?: ProjectReference;
    properties?: PropertiesCollection;
    /**
     * Gets reason of release.
     */
    reason?: 'none' | 'manual' | 'continuousIntegration' | 'schedule' | 'pullRequest';
    /**
     * Gets releaseDefinitionReference which specifies the reference of the release definition to which this release is associated.
     */
    releaseDefinition?: ReleaseDefinitionShallowReference;
    /**
     * Gets or sets the release definition revision.
     */
    releaseDefinitionRevision?: number;
    /**
     * Gets release name format.
     */
    releaseNameFormat?: string;
    /**
     * Gets status.
     */
    status?: 'undefined' | 'draft' | 'active' | 'abandoned';
    /**
     * Gets or sets list of tags.
     */
    tags?: Array<string>;
    triggeringArtifactAlias?: string;
    /**
     * Gets the list of variable groups.
     */
    variableGroups?: Array<VariableGroup>;
    /**
     * Gets or sets the dictionary of variables.
     */
    variables?: Record<string, ConfigurationVariableValue>;
};

