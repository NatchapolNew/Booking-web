import {
  AddorRemoveFavorite,
  filterCamping,
  listCamping,
  listFavorites,
} from "@/api/Camping";
import { create } from "zustand";

//step1 Create Store
const campingStore = (set, get) => ({
  campings: [],
  favorites: [],
  actionListCampings: async (id) => {
    try {
      const res = await listCamping(id);

      set({
        campings: res.data.result,
      });
    } catch (error) {
      console.log(error);
    }
  },
  actionAddorRemoveFavortie: async (token, data) => {
    try {
      const res = await AddorRemoveFavorite(token, data);
      const camping = get().campings;
      const { campingId, isFavorite } = data;
      const updatedCamping = camping.map((item) => {
        return item.id === campingId
          ? { ...item, isfavorites: !isFavorite }
          : item;
      });
      set({ campings: updatedCamping });
      const favorites = get().favorites;
      const updatedFavorite = favorites.filter((item) => {
        return item.Landmark.id !== campingId;
      });
      set({ favorites: updatedFavorite });
      return { success: true, message: res.data.message };
    } catch (error) {
      const err = error.response?.data?.message;
      return { success: false, message: err };
    }
  },
  actionListFavorites: async (token) => {
    try {
      const res = await listFavorites(token);
      set({ favorites: res.data.result });
    } catch (error) {
      const err = error.response?.data?.message;
      return { success: false, message: err };
    }
  },
  actionFilter: async (category = "", search = "") => {
    try {
      const res = await filterCamping(category, search);
      console.log('zustand',res.data.result);
      set({campings:res.data.result})
    } catch (error) {
      console.log(error);
    }
  },
});

const useCampingStore = create(campingStore);
//step2 Export Store
export default useCampingStore;
