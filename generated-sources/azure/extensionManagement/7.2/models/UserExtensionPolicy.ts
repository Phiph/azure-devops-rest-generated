/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ExtensionPolicy } from './ExtensionPolicy';
/**
 * Represents the extension policy applied to a given user
 */
export type UserExtensionPolicy = {
    /**
     * User display name that this policy refers to
     */
    displayName?: string;
    /**
     * The extension policy applied to the user
     */
    permissions?: ExtensionPolicy;
    /**
     * User id that this policy refers to
     */
    userId?: string;
};

