/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Artifact } from './Artifact';
import type { IdentityRef } from './IdentityRef';
import type { ReferenceLinks } from './ReferenceLinks';
import type { ReleaseDefinitionShallowReference } from './ReleaseDefinitionShallowReference';
export type ReleaseReference = {
    /**
     * Gets links to access the release.
     */
    _links?: ReferenceLinks;
    /**
     * Gets list of artifacts.
     */
    artifacts?: Array<Artifact>;
    /**
     * Gets the identity who created release.
     */
    createdBy?: IdentityRef;
    /**
     * Gets date on when this release created.
     */
    createdOn?: string;
    /**
     * Gets description.
     */
    description?: string;
    /**
     * ID of the Release.
     */
    id?: number;
    /**
     * Gets the identity who modified release.
     */
    modifiedBy?: IdentityRef;
    /**
     * Gets name of release.
     */
    name?: string;
    /**
     * Gets reason for release.
     */
    reason?: 'none' | 'manual' | 'continuousIntegration' | 'schedule' | 'pullRequest';
    /**
     * Gets release definition shallow reference.
     */
    releaseDefinition?: ReleaseDefinitionShallowReference;
};

