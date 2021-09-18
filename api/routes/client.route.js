import express from "express";
import ClientController, {
  validateRequestClient,
} from "../controllers/client.controller.js";

const router = express.Router();

router.get("/", ClientController.getClients);
router.get("/:id", ClientController.getClient);
router.post("/", validateRequestClient, ClientController.createClient);
router.put("/", validateRequestClient, ClientController.updateClient);
router.delete("/:id", ClientController.deleteClient);

export default router;
