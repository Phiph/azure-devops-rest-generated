/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IdentityDescriptor } from './IdentityDescriptor';
export type IdentityScope = {
    administrators?: IdentityDescriptor;
    id?: string;
    isActive?: boolean;
    isGlobal?: boolean;
    localScopeId?: string;
    name?: string;
    parentId?: string;
    scopeType?: 'generic' | 'serviceHost' | 'teamProject';
    securingHostId?: string;
    subjectDescriptor?: string;
};

