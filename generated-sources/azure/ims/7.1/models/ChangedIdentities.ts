/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ChangedIdentitiesContext } from './ChangedIdentitiesContext';
import type { Identity } from './Identity';
/**
 * Container class for changed identities
 */
export type ChangedIdentities = {
    /**
     * Changed Identities
     */
    identities?: Array<Identity>;
    /**
     * More data available, set to true if pagesize is specified.
     */
    moreData?: boolean;
    /**
     * Last Identity SequenceId
     */
    sequenceContext?: ChangedIdentitiesContext;
};

