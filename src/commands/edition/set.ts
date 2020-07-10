import { CustomCommand, setEdition } from 'vtex'

export default class EditionSet extends CustomCommand {
  static description = 'Set edition of the current account'

  static examples = ['vtex edition set editionName']

  static flags = {
    ...CustomCommand.globalFlags,
  }

  static args = [{ name: 'edition', required: true }]

  async run() {
    const {
      args: { edition },
    } = this.parse(EditionSet)

    await setEdition(edition)
  }
}
