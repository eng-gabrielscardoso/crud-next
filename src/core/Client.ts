export default class Client {
  #id: string
  #name: string
  #age: number

  constructor (id: string = null, name: string, age: number) {
    this.#id = id
    this.#name = name
    this.#age = age
  }

  get id() {
    return this.#id
  }

  get name() {
    return this.#name
  }

  get age() {
    return this.#age
  }

  static nullClient() {
    return new Client(null, '', 0)
  }
}
