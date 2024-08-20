/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GitImportGitSource } from './GitImportGitSource';
import type { GitImportTfvcSource } from './GitImportTfvcSource';
export type ImportRepositoryValidation = {
    gitSource?: GitImportGitSource;
    password?: string;
    tfvcSource?: GitImportTfvcSource;
    username?: string;
};

