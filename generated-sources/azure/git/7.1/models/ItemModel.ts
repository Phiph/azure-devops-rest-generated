/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FileContentMetadata } from './FileContentMetadata';
import type { ReferenceLinks } from './ReferenceLinks';
export type ItemModel = {
    _links?: ReferenceLinks;
    content?: string;
    contentMetadata?: FileContentMetadata;
    isFolder?: boolean;
    isSymLink?: boolean;
    path?: string;
    url?: string;
};

