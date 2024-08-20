/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProfileAttribute } from './ProfileAttribute';
/**
 * Stores a set of named profile attributes.
 */
export type AttributesContainer = {
    /**
     * The attributes stored by the container.
     */
    attributes?: Record<string, ProfileAttribute>;
    /**
     * The name of the container.
     */
    containerName?: string;
    /**
     * The maximum revision number of any attribute within the container.
     */
    revision?: number;
};

