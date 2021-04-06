import MagicBellClient, { pushEventAggregator } from "@magicbell/core";

export class Client {
    public async start(): Promise<void> {
        const userEmail = "gauravtiwari5050@gmail.com";
        const client = new MagicBellClient({
          apiKey: "8b2ce7b8e6f6e63c19ef8266c82cf91bc3aaada0",
          userEmail,
        });
        const dispose = client.startRealTimeListener();
        pushEventAggregator.on("notifications.new", () => {
          client.getStore().fetchAndReset();
        });
        dispose();
    }
}