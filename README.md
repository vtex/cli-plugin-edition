cli-plugin-edition
===================

vtex plugin edition

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
![npm](https://img.shields.io/npm/v/@vtex/cli-plugin-edition)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @vtex/cli-plugin-edition
$ oclif-example COMMAND
running command...
$ oclif-example (-v|--version|version)
@vtex/cli-plugin-edition/0.1.1-beta.1 linux-x64 node-v12.21.0
$ oclif-example --help [COMMAND]
USAGE
  $ oclif-example COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`oclif-example edition:get`](#oclif-example-editionget)
* [`oclif-example edition:set EDITION`](#oclif-example-editionset-edition)

## `oclif-example edition:get`

Displays the Edition App version installed on the current account.

```
USAGE
  $ oclif-example edition:get

OPTIONS
  -h, --help     show CLI help
  -v, --verbose  Show debug level logs
  --trace        Ensure all requests to VTEX IO are traced

EXAMPLE
  vtex edition get
```

_See code: [build/commands/edition/get.ts](https://github.com/vtex/cli-plugin-edition/blob/v0.1.1-beta.1/build/commands/edition/get.ts)_

## `oclif-example edition:set EDITION`

Sets the Edition App version for the current account.

```
USAGE
  $ oclif-example edition:set EDITION

ARGUMENTS
  EDITION  Name and version of the Edition App to install.

OPTIONS
  -h, --help     show CLI help
  -v, --verbose  Show debug level logs
  --trace        Ensure all requests to VTEX IO are traced

EXAMPLE
  vtex edition set editionName
```

_See code: [build/commands/edition/set.ts](https://github.com/vtex/cli-plugin-edition/blob/v0.1.1-beta.1/build/commands/edition/set.ts)_
<!-- commandsstop -->
