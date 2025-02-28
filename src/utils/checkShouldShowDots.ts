import { PowerFlowCardPlusConfig } from "../van-consumables-flow-card-plus-config";

export const checkShouldShowDots = (config: PowerFlowCardPlusConfig) => {
  return config.disable_dots !== true;
};
