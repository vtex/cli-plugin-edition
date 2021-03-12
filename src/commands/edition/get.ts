import { getEdition, CustomCommand, ColorifyConstants } from 'vtex'

export default class EditionGet extends CustomCommand {
  static description = `Displays the ${ColorifyConstants.ID(
    'Edition App'
  )} version installed on the current ${ColorifyConstants.ID('account')}.`

  static examples = [`${ColorifyConstants.COMMAND_OR_VTEX_REF('vtex edition get')}`]

  static flags = {
    ...CustomCommand.globalFlags,
  }

  static args = []

  async run() {
    this.parse(EditionGet)

    await getEdition()
  }
}
