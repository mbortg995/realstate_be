import buildingModel from './building.model.js';

const buildingRepository = {
  index: async () => {
    const buildings = await buildingModel.find().lean();
    return buildings;
  },
  getById: async (buildingId) => {
    const filter = { _id: buildingId }
    const building = await buildingModel.findOne(filter).lean();
    return building;
  },
  create: async (building) => {
    const createdBuilding = await buildingModel.create(building);
    return createdBuilding;
  },
}

export default buildingRepository;