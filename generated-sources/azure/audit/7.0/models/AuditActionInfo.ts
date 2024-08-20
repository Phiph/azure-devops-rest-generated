/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type AuditActionInfo = {
    /**
     * The action id for the event, i.e Git.CreateRepo, Project.RenameProject
     */
    actionId?: string;
    /**
     * Area of Azure DevOps the action occurred
     */
    area?: string;
    /**
     * Type of action executed
     */
    category?: 'unknown' | 'modify' | 'remove' | 'create' | 'access' | 'execute';
};

