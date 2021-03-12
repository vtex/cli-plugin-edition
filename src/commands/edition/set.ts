import { CustomCommand, setEdition, ColorifyConstants } from 'vtex'

export default class EditionSet extends CustomCommand {
  static description = `Sets the ${ColorifyConstants.ID('Edition App')} version for the current ${ColorifyConstants.ID(
    'account'
  )}.`

  static examples = [`${ColorifyConstants.COMMAND_OR_VTEX_REF('vtex edition set')} editionName`]

  static flags = {
    ...CustomCommand.globalFlags,
  }

  static args = [
    {
      name: 'edition',
      required: true,
      description: `Name and version of the ${ColorifyConstants.ID('Edition App')} to install.`,
    },
  ]

  async run() {
    const {
      args: { edition },
    } = this.parse(EditionSet)

    await setEdition(edition)
  }
}
