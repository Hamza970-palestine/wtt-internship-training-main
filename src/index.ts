import dotenv from 'dotenv'
dotenv.config()
import loggerService from './common/helper/logger.service'
loggerService.setConsoleLog()
import mainService from './services/main/main.service'

async function exe() {
  await mainService.main()
}
exe()
