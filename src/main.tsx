import { createApplication } from '$/core/providers/createApplication'

import 'normalize.css/normalize.css'
import '@blueprintjs/core/lib/css/blueprint.css'

import './main.css'

async function bootstrap() {
  let app = createApplication()

  app.run()
}

void bootstrap()
