/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ReferenceLinks } from './ReferenceLinks';
import type { TeamProjectCollectionReference } from './TeamProjectCollectionReference';
/**
 * Data contract for a TeamProjectCollection.
 */
export type TeamProjectCollection = (TeamProjectCollectionReference & {
    /**
     * The links to other objects related to this object.
     */
    _links?: ReferenceLinks;
    /**
     * Project collection description.
     */
    description?: string;
    /**
     * Process customization type on this collection. It can be Xml or Inherited.
     */
    processCustomizationType?: 'unknown' | 'xml' | 'inherited';
    /**
     * Project collection state.
     */
    state?: string;
});

