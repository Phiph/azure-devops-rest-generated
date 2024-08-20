/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GraphSubject } from './GraphSubject';
/**
 * Container where a graph entity is defined (organization, project, team)
 */
export type GraphScope = (GraphSubject & {
    /**
     * The subject descriptor that references the administrators group for this scope. Only members of this group can change the contents of this scope or assign other users permissions to access this scope.
     */
    administratorDescriptor?: string;
    /**
     * When true, this scope is also a securing host for one or more scopes.
     */
    isGlobal?: boolean;
    /**
     * The subject descriptor for the closest account or organization in the ancestor tree of this scope.
     */
    parentDescriptor?: string;
    /**
     * The type of this scope. Typically ServiceHost or TeamProject.
     */
    scopeType?: 'generic' | 'serviceHost' | 'teamProject';
    /**
     * The subject descriptor for the containing organization in the ancestor tree of this scope.
     */
    securingHostDescriptor?: string;
});

