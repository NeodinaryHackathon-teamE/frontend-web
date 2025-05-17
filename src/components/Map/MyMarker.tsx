const MyMarker = ({ title }: { title: string }) => (
  <div
    style={{
      backgroundColor: 'blue',
      color: 'white',
      padding: '6px 12px',
      borderRadius: 8,
      fontWeight: 'bold',
    }}
  >
    {title} 마커
  </div>
);
export default MyMarker;
