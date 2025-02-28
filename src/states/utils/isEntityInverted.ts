import { PowerFlowCardPlusConfig } from "../../van-consumables-flow-card-plus-config";
import { EntityType } from "../../type";

export const isEntityInverted = (config: PowerFlowCardPlusConfig, entityType: EntityType) => !!config.entities[entityType]?.invert_state;
