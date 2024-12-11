import type { WifiNetwork as WifiNetworkPb } from 'types/_generated/services/wifi/wifi_pb';
import { wifiNetworkClient } from '../grpc-connect/clients';
export type WifiNetwork = {
	inUse: boolean;
	bssid: string;
	ssid: string;
	channel: number;
	rate: string;
	signal: string;
	security: string;
};

class WifiNetworkStore {
	availableWifiNetworks = $state<WifiNetwork[]>([]);
	selectedWifiNetwork = $state<WifiNetwork | null>(null);

	connectToNetwork = async (ssid: string, password?: string) => {
		try {
			await wifiNetworkClient.connectToNetwork({ ssid, password });
		} catch (e) {
			throw e;
		}
	};
}

export default new WifiNetworkStore();
