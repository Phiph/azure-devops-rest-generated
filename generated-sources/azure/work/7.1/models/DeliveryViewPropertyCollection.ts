/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CardSettings } from './CardSettings';
import type { FilterClause } from './FilterClause';
import type { Marker } from './Marker';
import type { Rule } from './Rule';
import type { TeamBacklogMapping } from './TeamBacklogMapping';
/**
 * Collection of properties, specific to the DeliveryTimelineView
 */
export type DeliveryViewPropertyCollection = {
    /**
     * Card settings
     */
    cardSettings?: CardSettings;
    /**
     * Field criteria
     */
    criteria?: Array<FilterClause>;
    /**
     * Markers. Will be missing/null if there are no markers.
     */
    markers?: Array<Marker>;
    /**
     * Card style settings
     */
    styleSettings?: Array<Rule>;
    /**
     * tag style settings
     */
    tagStyleSettings?: Array<Rule>;
    /**
     * Team backlog mappings
     */
    teamBacklogMappings?: Array<TeamBacklogMapping>;
};

