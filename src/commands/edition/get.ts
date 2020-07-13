import { getEdition, CustomCommand } from 'vtex'

export default class EditionGet extends CustomCommand {
  static description = 'Get edition of the current account'

  static examples = ['vtex edition get']

  static flags = {
    ...CustomCommand.globalFlags,
  }

  static args = []

  async run() {
    this.parse(EditionGet)

    await getEdition()
  }
}
