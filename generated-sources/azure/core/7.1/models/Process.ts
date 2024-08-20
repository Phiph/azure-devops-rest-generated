/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProcessReference } from './ProcessReference';
import type { ReferenceLinks } from './ReferenceLinks';
export type Process = (ProcessReference & {
    _links?: ReferenceLinks;
    description?: string;
    id?: string;
    isDefault?: boolean;
    type?: 'system' | 'custom' | 'inherited';
});

