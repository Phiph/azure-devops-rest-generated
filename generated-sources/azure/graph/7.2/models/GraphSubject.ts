/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GraphSubjectBase } from './GraphSubjectBase';
/**
 * Top-level graph entity
 */
export type GraphSubject = (GraphSubjectBase & {
    /**
     * [Internal Use Only] The legacy descriptor is here in case you need to access old version IMS using identity descriptor.
     */
    legacyDescriptor?: string;
    /**
     * The type of source provider for the origin identifier (ex:AD, AAD, MSA)
     */
    origin?: string;
    /**
     * The unique identifier from the system of origin. Typically a sid, object id or Guid. Linking and unlinking operations can cause this value to change for a user because the user is not backed by a different provider and has a different unique id in the new provider.
     */
    originId?: string;
    /**
     * This field identifies the type of the graph subject (ex: Group, Scope, User).
     */
    subjectKind?: string;
});

