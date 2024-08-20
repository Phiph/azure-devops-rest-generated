/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Link } from './Link';
/**
 * Session source
 */
export type Source = {
    /**
     * Source links Valid values for "type" property = (SessionInfo)
     */
    links?: Array<Link>;
    /**
     * Source origin system
     */
    originSystem?: string;
    /**
     * Source session id
     */
    sessionId?: string;
    /**
     * Source tenant Id
     */
    tenantId?: string;
    /**
     * Source tenant name
     */
    tenantName?: string;
};

