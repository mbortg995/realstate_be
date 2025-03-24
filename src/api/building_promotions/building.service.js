import buildingRepository from './building.repository.js';

const validateBuildingFields = (building) => {
  const requiredFields = ['name', 'address', 'housing_number'];

  for (const field of requiredFields) {
    if (!building[field]) {
      throw new Error('Missing required field');
    }
  }
};

const buildingService = {
  index: async () => {
    const buildings = await buildingRepository.index();
    return buildings;
  },
  getById: async (buildingId) => {
    const building = await buildingRepository.getById(buildingId);
    if (!building) {
      throw new Error('Building not found');
    }
    return building;
  },
  create: async (building) => {
    validateBuildingFields(building);
    const createdBuilding = await buildingRepository.create(building);
    if (!createdBuilding) {
      throw new Error('Building not created');
    }
    return createdBuilding;
  },
  update: () => {
    // @clack/prompts
  },
  delete: () => {
    // @clack/prompts
  },
}

export default buildingService;