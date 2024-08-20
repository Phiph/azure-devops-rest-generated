/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AttributesContainer } from './AttributesContainer';
import type { CoreProfileAttribute } from './CoreProfileAttribute';
/**
 * A user profile.
 */
export type Profile = {
    /**
     * The attributes of this profile.
     */
    applicationContainer?: AttributesContainer;
    /**
     * The core attributes of this profile.
     */
    coreAttributes?: Record<string, CoreProfileAttribute>;
    /**
     * The maximum revision number of any attribute.
     */
    coreRevision?: number;
    /**
     * The unique identifier of the profile.
     */
    id?: string;
    /**
     * The current state of the profile.
     */
    profileState?: 'custom' | 'customReadOnly' | 'readOnly';
    /**
     * The maximum revision number of any attribute.
     */
    revision?: number;
    /**
     * The time at which this profile was last changed.
     */
    timeStamp?: string;
};

