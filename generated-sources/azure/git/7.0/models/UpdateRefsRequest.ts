/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GitRefUpdate } from './GitRefUpdate';
export type UpdateRefsRequest = {
    refUpdateRequests?: Array<GitRefUpdate>;
    updateMode?: 'bestEffort' | 'allOrNone';
};

