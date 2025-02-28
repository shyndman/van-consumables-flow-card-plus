import { VanConsumablesFlowCardPlusConfig } from "../van-consumables-flow-card-plus-config";

export const checkShouldShowDots = (config: VanConsumablesFlowCardPlusConfig) => {
  return config.disable_dots !== true;
};
