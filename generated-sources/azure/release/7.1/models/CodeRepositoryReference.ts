/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ReleaseManagementInputValue } from './ReleaseManagementInputValue';
export type CodeRepositoryReference = {
    /**
     * Gets and sets the repository references.
     */
    repositoryReference?: Record<string, ReleaseManagementInputValue>;
    /**
     * It can have value as ‘GitHub’, ‘Vsts’.
     */
    systemType?: 'none' | 'tfsGit' | 'gitHub';
};

