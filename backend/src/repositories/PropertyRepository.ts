import { AppDataSource } from "../data-source";
import { Property } from "../entities/Property";

export const PropertyRepository = AppDataSource.getRepository(Property).extend({
  async findTree() {
    return this.findTrees();
  },
});
