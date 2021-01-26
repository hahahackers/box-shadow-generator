import { createApplication } from '$/core/providers/createApplication'

import './main.css'

async function bootstrap() {
  let app = createApplication()

  app.run()
}

void bootstrap()
