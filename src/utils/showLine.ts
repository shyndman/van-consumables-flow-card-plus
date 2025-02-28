import { VanConsumablesFlowCardPlusConfig } from "../van-consumables-flow-card-plus-config";

export const showLine = (config: VanConsumablesFlowCardPlusConfig, power: number): boolean => {
  if (power > 0) return true;
  return config?.display_zero_lines?.mode !== "hide";
};
