/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ReferenceLinks } from './ReferenceLinks';
/**
 * Package version metadata for a Universal package
 */
export type Package = {
    /**
     * Related REST links.
     */
    _links?: ReferenceLinks;
    /**
     * If and when the package was deleted.
     */
    deletedDate?: string;
    /**
     * Package Id.
     */
    id?: string;
    /**
     * The display name of the package.
     */
    name?: string;
    /**
     * If and when the package was permanently deleted.
     */
    permanentlyDeletedDate?: string;
    /**
     * The version of the package.
     */
    version?: string;
};

