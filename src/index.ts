import dotenv from 'dotenv'
dotenv.config()

console.log(
  'Hello World',
) /* 7.4 Modifier un fichier TypeScript (par exemple `src/index.ts`) */

import loggerService from './common/helper/logger.service'
loggerService.setConsoleLog()
import mainService from './services/main/main.service'

async function exe() {
  await mainService.main()
}
exe()
