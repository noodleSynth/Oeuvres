import { defineStore } from "pinia";
import repoExclusion from "../../repoExclude.json";

interface UtilStore {}

export const useUtilStore = defineStore("UtilStore" ,{
  state: (): UtilStore => ({}),
  getters: {
    repoExclusions: () => repoExclusion,
  },
});
