import RecipientRepository from './recipient_repository';

class RecipientController {
  async index(req, res) {
    try {
      const recipients = await RecipientRepository.listRecipients();
      return res.json(recipients);
    } catch (error) {
      return res.status(400).send(`${error}`);
    }
  }

  async show(req, res) {
    try {
      const recipient = await RecipientRepository.listOneRecipient(
        req.params.id,
      );
      return res.json(recipient);
    } catch (error) {
      return res.status(400).send(`${error}`);
    }
  }

  async store(req, res) {
    try {
      const { name, street, number, complement, state, city, cep } = req.body;
      const newRecipient = await RecipientRepository.createRecipient({
        name,
        street,
        number,
        complement,
        state,
        city,
        cep,
      });

      return res.json(newRecipient);
    } catch (error) {
      return res.status(400).send(`${error}`);
    }
  }

  async update(req, res) {
    try {
      const { name, street, number, complement, state, city, cep } = req.body;
      const updatedRecipient = await RecipientRepository.updateRecipient(
        req.params.id,
        { name, street, number, complement, state, city, cep },
      );
      return res.json(updatedRecipient);
    } catch (error) {
      return res.status(400).send(`${error}`);
    }
  }

  async delete(req, res) {
    try {
      const deletedRecipient = await RecipientRepository.deleteRecipient(
        req.params.id,
      );

      return res.json(deletedRecipient);
    } catch (error) {
      return res.status(400).send(`${error}`);
    }
  }
}
export default new RecipientController();