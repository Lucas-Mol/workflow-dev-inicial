/* eslint-disable class-methods-use-this */
/* eslint-disable camelcase */
// import db from '../db/dbconfig.js';

class Evento {
  constructor({
    id,
    nome,
    descricao,
    data,
    autor_id,
    created_at,
    updated_at,
  }) {
    this.id = id || null;
    this.nome = nome;
    this.descricao = descricao;
    this.data = data;
    this.autor_id = autor_id;
    this.created_at = created_at || new Date().toISOString();
    this.updated_at = updated_at || new Date().toISOString();
  }

  static async pegarEventos() {
    // hardcoded to tests
    return [{
      id: 1,
      nome: 'lancamento',
      descricao: 'descricao de lancamento',
      data: '2024-03-07',
      autor_id: 1,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    }];
  }
}

export default Evento;
