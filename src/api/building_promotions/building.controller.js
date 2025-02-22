import buildingService from './building.service.js';

export const buildingController = {
  index: async (req, res) => {
    // aceptar query params?
    try {
      const buildings = await buildingService.index();
      return res.json(buildings);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
  getById: async (req, res) => {
    try {
      const building = await buildingService.getById(req.params.buildingId);
      return res.json(building);
    } catch (error) {
      if (error.message === 'Building not found') {
        return res.status(404).json({ error: error.message });
      }
      return res.status(500).json({ error: error.message });
    }
  },
  create: async (req, res) => {
    try {
      // pendiente: ¿Quién podrá crear?
      const building = await buildingService.create(req.body);
      return res.json(building);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
  update: async (req, res) => {
    // Pendiente: ¿Quién podrá updatear? @clack/prompts
    try {
      const building = await buildingService.update(req.body, req.params.buildingId);
      return res.json(building);
    } catch (error) {
      return res.status(422).json({ error: error.message });
    }
  },
  delete: async (req, res) => {
    // Pendiente: ¿Quién podrá borrar? @clack/prompts
    try {
      const building = await buildingService.delete(req.params.buildingId);
      return res.json(building);
    } catch (error) {
      return res.status(422).json({ error: error.message });
    }
  }
}