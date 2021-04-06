import { Client } from "./Client";

const client = new Client();
(async () => {
  await client.start();
})();