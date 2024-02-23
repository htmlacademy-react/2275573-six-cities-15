type MapLocation = {
  location: string;
}

function Map({ location }: MapLocation): JSX.Element {
  return (
    <section className={`${location}__map map`} />
  );
}


export default Map;
