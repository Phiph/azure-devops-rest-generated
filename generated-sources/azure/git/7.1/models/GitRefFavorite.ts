/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ReferenceLinks } from './ReferenceLinks';
export type GitRefFavorite = {
    _links?: ReferenceLinks;
    id?: number;
    identityId?: string;
    name?: string;
    repositoryId?: string;
    type?: 'invalid' | 'folder' | 'ref';
    url?: string;
};

