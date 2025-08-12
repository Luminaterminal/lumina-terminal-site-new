export default function Page() {
  return (
    <main style={{
      minHeight: '100vh',
      background: '#000',
      color: '#fff',
      display: 'grid',
      placeItems: 'center',
      fontFamily: 'system-ui, sans-serif'
    }}>
      <div style={{textAlign: 'center', lineHeight: 1.4}}>
        <h1 style={{fontSize: 36, margin: 0}}>Lumina Terminal</h1>
        <p style={{opacity: 0.8, marginTop: 8}}>Illuminate the markets.</p>
      </div>
    </main>
  );
}

