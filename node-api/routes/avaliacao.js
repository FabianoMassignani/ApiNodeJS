const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();

const Avaliacao = require("../models/avaliacao");

router.get("/", async (req, res) => {

  const idPasseio = req.query.idPasseio;
  const avaliacoes = await Avaliacao.find(
    { idPasseio: idPasseio },
  );

  if (!avaliacoes) {
    res.status(500).json({ success: false });
  }

  res.send(avaliacoes);
});



router.post("/", async (req, res) => {
  try {

    let avaliacao = new Avaliacao({
      idPasseio: req.body.idPasseio,
      idUsuario: req.body.idUsuario,
      dataAvaliacao: req.body.dataAvaliacao,
      classificacao: req.body.classificacao,
      comentario: req.body.comentario,
    });


    avaliacao = await avaliacao.save();

    if (!avaliacao) {
      return res.status(400).send("O comentario nao pode ser salvo!");
    }

    res.send(avaliacao);
  } catch (err) {
    console.log(err);
  }
});


module.exports = router;
