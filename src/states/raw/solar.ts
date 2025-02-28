import { HomeAssistant } from "custom-card-helpers";
import { VanConsumablesFlowCardPlusConfig } from "../../van-consumables-flow-card-plus-config";
import { isNumberValue } from "../../utils/utils";
import { isEntityInverted } from "../utils/isEntityInverted";
import { getEntityStateWatts } from "../utils/getEntityStateWatts";
import { onlyNegative, onlyPositive } from "../utils/negativePositive";
import { getSecondaryState } from "./base";

export const getSolarState = (hass: HomeAssistant, config: VanConsumablesFlowCardPlusConfig) => {
  const entity = config.entities.solar?.entity;

  if (entity === undefined) return null;

  const solarStateWatts = getEntityStateWatts(hass, entity);

  if (isEntityInverted(config, "solar")) return onlyNegative(solarStateWatts);

  return onlyPositive(solarStateWatts);
};

export const getSolarSecondaryState = (hass: HomeAssistant, config: VanConsumablesFlowCardPlusConfig) => getSecondaryState(hass, config, "solar");
