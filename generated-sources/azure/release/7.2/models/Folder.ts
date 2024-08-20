/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IdentityRef } from './IdentityRef';
export type Folder = {
    /**
     * Identity who created this folder.
     */
    createdBy?: IdentityRef;
    /**
     * Time when this folder created.
     */
    createdOn?: string;
    /**
     * Description of the folder.
     */
    description?: string;
    /**
     * Identity who last changed this folder.
     */
    lastChangedBy?: IdentityRef;
    /**
     * Time when this folder last changed.
     */
    lastChangedDate?: string;
    /**
     * path of the folder.
     */
    path?: string;
};

