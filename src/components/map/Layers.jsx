import useCampingStore from "@/store/camping-store";
import { LayerGroup, LayersControl, Tooltip} from "react-leaflet";
import { TileLayer, Marker, Popup } from "react-leaflet";
const Layers = () => {
  const campings = useCampingStore((state)=>state.campings)


 
  return (
    <LayersControl>
      <LayersControl.BaseLayer name="OSM" checked>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </LayersControl.BaseLayer>
      <LayersControl.BaseLayer name="Sattelite" checked>
        <TileLayer
          attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
        />
      </LayersControl.BaseLayer>

      {/* Overlay layer */}
      <LayersControl.Overlay name="Landmark" checked>
        <LayerGroup>
        {campings?.map((item) => {
          return (
            <Marker key={item.id} position={[item.lat, item.lng]}>
              <Popup>
                {item.title} <br /> {item.description}
                
              </Popup>
              <Tooltip>
                {item.title}
              </Tooltip>
            </Marker>
          );
        })}
        </LayerGroup>
      </LayersControl.Overlay>
    </LayersControl>
  );
};
export default Layers;
