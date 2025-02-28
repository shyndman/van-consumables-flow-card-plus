import { HomeAssistant } from "custom-card-helpers";
import { VanConsumablesFlowCardPlusConfig } from "../../van-consumables-flow-card-plus-config";
import { getFieldInState, getFieldOutState } from "./base";
import { getEntityState } from "../utils/getEntityState";

export const getBatteryStateOfCharge = (hass: HomeAssistant, config: VanConsumablesFlowCardPlusConfig) => {
  const entity = config.entities.battery?.state_of_charge;

  if (entity === undefined) return null;

  return getEntityState(hass, entity);
};

export const getBatteryInState = (hass: HomeAssistant, config: VanConsumablesFlowCardPlusConfig) => getFieldInState(hass, config, "battery");

export const getBatteryOutState = (hass: HomeAssistant, config: VanConsumablesFlowCardPlusConfig) => getFieldOutState(hass, config, "battery");
