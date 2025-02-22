import buildingRepository from './building.repository.js';

const validateBuildingFields = (building) => {
  const requiredFields = ['name', 'adress', 'housing_number'];

  for (const field of requiredFields) {
    if (!building[field]) {
      throw new Error('Missing required field');
    }
  }
};

const buildingService = {
  index: () => {
    const buildings = buildingRepository.index();
    return buildings;
  },
  getById: (buildingId) => {
    const building = buildingRepository.getById(buildingId);
    if (!building) {
      throw new Error('Building not found');
    }
    return building;
  },
  create: (building) => {
    validateBuildingFields(building);
    const createdBuilding = buildingRepository.create(building);
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