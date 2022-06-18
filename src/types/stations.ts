export interface IStation {
  cover?: string;
  musicSrc?: string;
  name: string;
  favicon?: string;
  url?: string;
  stationuuid?: string;
  __PLAYER_KEY__?: string;
}

export interface IStationItem {
  name: string;
  favicon?: string;
  stationuuid: string;
  url: string;
}
