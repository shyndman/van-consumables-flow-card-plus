import { HomeAssistant } from "custom-card-helpers";
import { getEntityStateWatts } from "../utils/getEntityStateWatts";
import { isEntityInverted } from "../utils/isEntityInverted";
import { VanConsumablesFlowCardPlusConfig } from "../../van-consumables-flow-card-plus-config";
import { onlyNegative, onlyPositive } from "../utils/negativePositive";
import { getFieldInState, getFieldOutState, getSecondaryState } from "./base";

export const getGridConsumptionState = (hass: HomeAssistant, config: VanConsumablesFlowCardPlusConfig) => getFieldOutState(hass, config, "grid");

export const getGridProductionState = (hass: HomeAssistant, config: VanConsumablesFlowCardPlusConfig) => getFieldInState(hass, config, "grid");

export const getGridSecondaryState = (hass: HomeAssistant, config: VanConsumablesFlowCardPlusConfig) => getSecondaryState(hass, config, "grid");
