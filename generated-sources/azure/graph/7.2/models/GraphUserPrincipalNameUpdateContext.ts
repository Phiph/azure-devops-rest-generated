/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GraphUserUpdateContext } from './GraphUserUpdateContext';
/**
 * Use this type for transfering identity rights, for instance after performing a Tenant switch.
 */
export type GraphUserPrincipalNameUpdateContext = (GraphUserUpdateContext & {
    /**
     * This should be Principal Name (UPN) to which we want to transfer rights. Example: destination@email.com
     */
    principalName?: string;
});

