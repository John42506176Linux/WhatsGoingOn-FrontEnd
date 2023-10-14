import { TOGGLE_CATEGORY } from "./actionTypes";

export interface ToggleCategoryAction {
  type: typeof TOGGLE_CATEGORY;
  payload: string;
}

export const toggleCategory = (categoryName: string): ToggleCategoryAction => ({
  type: TOGGLE_CATEGORY,
  payload: categoryName
});
