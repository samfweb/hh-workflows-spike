import { createClient } from "@connectrpc/connect";
import { createConnectTransport } from "@connectrpc/connect-web";
import { DevicesService } from "types/_generated/services/devices/devices_pb";
import { RssiService } from "types/_generated/services/rssi/rssi_pb";
import { IsrTargetService } from "types/_generated/services/isr/targets_pb";
import { LicenseService } from "types/_generated/services/license/license_pb";
import { PcapLogService } from "types/_generated/services/pcap/logs_pb";
import { RadioService } from "types/_generated/services/radio/radio_pb";
import { UpdateService } from "types/_generated/services/update/update_pb";
import { WifiNetworkService } from "types/_generated/services/wifi/wifi_pb";
import { FeatureService } from "types/_generated/services/features/features_pb";
import { HealthService } from "types/_generated/services/health/health_pb";
import { SysInfoService } from "types/_generated/services/sysinfo/sysinfo_pb";
import { GpsService } from "types/_generated/services/gps/gps_pb";
import { IsrSearchService } from "types/_generated/services/isr/search_pb";
import { PersistenceService } from "types/_generated/services/persistence/persistence_pb";
import { EulaService } from "types/_generated/services/eula/eula_pb";
import { connectionStatusMonitor } from "./connection-status";
import { session } from "./session";
import { requestLogger } from "./logging";
import { OuiService } from "types/_generated/services/oui/oui_pb";
import { SeenSsidsService } from "types/_generated/services/seen-ssids/ssids_pb";
import { DeauthService } from "types/_generated/services/deauth/deauth_pb";

let baseUrl = `http://${window.location.hostname}:9876`;
// @ts-ignore
if (import.meta.env.DEV) {
  // Update this to point at your dev device if necessary
  baseUrl = "http://pi64custom.local:9876";
}
console.log("using base grpc server url", baseUrl);

const transport = createConnectTransport({
  baseUrl,
  interceptors: [session, connectionStatusMonitor, requestLogger],
});

const devicesClient = createClient(DevicesService, transport);
const rssiClient = createClient(RssiService, transport);
const featureService = createClient(FeatureService, transport);
const isrTargetClient = createClient(IsrTargetService, transport);
const isrSearchClient = createClient(IsrSearchService, transport);
const licenseClient = createClient(LicenseService, transport);
const pcapLogClient = createClient(PcapLogService, transport);
const radioClient = createClient(RadioService, transport);
const updateClient = createClient(UpdateService, transport);
const wifiNetworkClient = createClient(WifiNetworkService, transport);
const sysInfoClient = createClient(SysInfoService, transport);
const gpsClient = createClient(GpsService, transport);
const healthClient = createClient(HealthService, transport);
const persistenceClient = createClient(PersistenceService, transport);
const eulaClient = createClient(EulaService, transport);
const ouiClient = createClient(OuiService, transport);
const seenSsidsClient = createClient(SeenSsidsService, transport);
const deauthClient = createClient(DeauthService, transport);

export {
  devicesClient,
  rssiClient,
  featureService,
  isrTargetClient,
  isrSearchClient,
  licenseClient,
  pcapLogClient,
  radioClient,
  updateClient,
  wifiNetworkClient,
  sysInfoClient,
  gpsClient,
  healthClient,
  persistenceClient,
  eulaClient,
  ouiClient,
  seenSsidsClient,
  deauthClient,
};
