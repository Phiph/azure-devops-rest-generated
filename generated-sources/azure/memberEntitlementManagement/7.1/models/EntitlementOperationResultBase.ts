/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type EntitlementOperationResultBase = {
    /**
     * List of error codes paired with their corresponding error messages.
     */
    errors?: Array<any>;
    /**
     * Success status of the operation.
     */
    isSuccess?: boolean;
    /**
     * Resulting entitlement property.  For specific implementations, see also: <seealso cref="T:Microsoft.VisualStudio.Services.MemberEntitlementManagement.WebApi.ServicePrincipalEntitlementOperationResult" /><seealso cref="T:Microsoft.VisualStudio.Services.MemberEntitlementManagement.WebApi.UserEntitlementOperationResult" />
     */
    result?: string;
};

