export default class PortaModel {
  #numero: number;
  #temPresnte: boolean;
  #selecionada: boolean;
  #aberta: boolean;

  constructor(numero: number, temPresnte = false, selecionada = false, aberta = false) {
    this.#numero = numero;
    this.#temPresnte = temPresnte;
    this.#selecionada = selecionada;
    this.#aberta = aberta;
  }

  get numero() {
    return this.#numero;
  }
  get temPresnte() {
    return this.#temPresnte;
  }
  get selecionada() {
    return this.#selecionada;
  }
  get aberta() {
    return this.#aberta;
  }
  get fechada() {
    return !this.#aberta;
  }

  desSelecionar() {
    const selecionada = false;
    return new PortaModel(this.numero, this.#temPresnte, selecionada, this.aberta);
  }

  alternarSelecao() {
    const selecionada = !this.selecionada;
    return new PortaModel(this.numero, this.#temPresnte, selecionada, this.aberta);
  }

  abrir() {
    const aberta = true;
    return new PortaModel(this.numero, this.#temPresnte, this.selecionada, aberta);
  }
}
