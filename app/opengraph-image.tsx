import { ImageResponse } from 'next/og';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg,#0ea5e9,#1e293b)',
          color: 'white',
          fontSize: 64,
          fontWeight: 700,
        }}
      >
        Lumina Terminal
      </div>
    ),
    { ...size }
  );
}
