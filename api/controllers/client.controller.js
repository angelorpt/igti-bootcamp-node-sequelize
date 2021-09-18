import ClientService from "../services/client.service.js";
import Validator from "Validator";

export const validateRequestClient = (req, res, next) => {
  const rules = {
    name: "required|string|max:255",
    cpf: "required|string|max:14",
    phone: "required|string|max:20",
    email: "required|email",
    address: "required|string|max:255",
  };

  const validate = Validator.make(req, rules);

  if (!validate.fails()) {
    next();
  } else {
    const errors = v.getErrors();
    console.log(errors);
  }
};

const createClient = async (req, res, next) => {
  try {
    let client = req.body;
    if (
      !client.name ||
      !client.cpf ||
      !client.phone ||
      !client.email ||
      !client.address
    ) {
      throw new Error("Name, CPF, Phone, Email e Address são obrigatórios.");
    }
    client = await ClientService.createClient(client);
    res.send(client);
    logger.info(`POST /client - ${JSON.stringify(client)}`);
  } catch (err) {
    next(err);
  }
};

async function getClients(req, res, next) {
  try {
    res.send(await ClientService.getClients());
    logger.info("GET /client");
  } catch (err) {
    next(err);
  }
}

async function getClient(req, res, next) {
  try {
    res.send(await ClientService.getClient(req.params.id));
    logger.info("GET /client");
  } catch (err) {
    next(err);
  }
}

async function deleteClient(req, res, next) {
  try {
    await ClientService.deleteClient(req.params.id);
    res.end();
    logger.info("DELETE /client");
  } catch (err) {
    next(err);
  }
}

async function updateClient(req, res, next) {
  try {
    let client = req.body;
    if (
      !client.client_id ||
      !client.name ||
      !client.cpf ||
      !client.phone ||
      !client.email ||
      !client.address
    ) {
      throw new Error(
        "Client ID, Name, CPF, Phone, Email e Address são obrigatórios."
      );
    }
    client = await ClientService.updateClient(client);
    res.send(client);
    logger.info(`PUT /client - ${JSON.stringify(client)}`);
  } catch (err) {
    next(err);
  }
}

export default {
  createClient,
  getClients,
  getClient,
  deleteClient,
  updateClient,
};
