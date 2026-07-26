import { ImageResponse } from 'next/og';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'SKIF-USA | Shotokan Karate-Do International Federation';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0a0a0a',
          backgroundImage:
            'radial-gradient(circle at 25% 15%, rgba(220,38,38,0.35), transparent 45%)',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 20,
            marginBottom: 28,
          }}
        >
          <div
            style={{
              width: 16,
              height: 64,
              backgroundColor: '#dc2626',
            }}
          />
          <div
            style={{
              display: 'flex',
              fontSize: 108,
              fontWeight: 900,
              letterSpacing: -4,
              color: '#ffffff',
              textTransform: 'uppercase',
            }}
          >
            SKIF-USA
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 34,
            fontWeight: 600,
            color: '#a3a3a3',
            textTransform: 'uppercase',
            letterSpacing: 6,
          }}
        >
          Shotokan Karate-Do International Federation
        </div>
      </div>
    ),
    { ...size }
  );
}
