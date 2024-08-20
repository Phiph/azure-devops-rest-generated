/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Project Group (e.g. Contributor, Reader etc.)
 */
export type Group = {
    /**
     * Display Name of the Group
     */
    displayName?: string;
    /**
     * Group Type
     */
    groupType?: 'projectStakeholder' | 'projectReader' | 'projectContributor' | 'projectAdministrator' | 'custom';
};

