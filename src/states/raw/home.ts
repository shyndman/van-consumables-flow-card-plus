import { HomeAssistant } from "custom-card-helpers";
import { getSecondaryState } from "./base";
import { VanConsumablesFlowCardPlusConfig } from "../../van-consumables-flow-card-plus-config";

export const getHomeSecondaryState = (hass: HomeAssistant, config: VanConsumablesFlowCardPlusConfig) => getSecondaryState(hass, config, "home");
