interface Window {
  ReactNativeWebView?: {
    postMessage: (message: string) => void;
  };
}
declare namespace google.maps.marker {
  class AdvancedMarkerView extends google.maps.MVCObject {
    constructor(options?: AdvancedMarkerViewOptions);
    position: google.maps.LatLng | google.maps.LatLngLiteral;
    map: google.maps.Map | null;
    title?: string;
    content?: HTMLElement | string;
  }

  interface AdvancedMarkerViewOptions {
    position?: google.maps.LatLng | google.maps.LatLngLiteral;
    map?: google.maps.Map | null;
    title?: string;
    content?: HTMLElement | string;
  }
}
