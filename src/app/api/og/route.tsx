import { ImageResponse } from '@vercel/og'

export const runtime = 'edge'

export async function GET() {
  try {
    const heroImage = await fetch(
      new URL('/hero-family-boat.jpg', 'https://fwsc.org').toString()
    ).then(res => res.arrayBuffer())

    return new ImageResponse(
      (
        <div
          style={{
            width: '1200px',
            height: '630px',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'flex-start',
            backgroundImage: `url(data:image/jpeg;base64,${Buffer.from(heroImage).toString('base64')})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'relative',
          }}
        >
          {/* Dark overlay */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(to bottom, rgba(20, 38, 78, 0.2) 0%, rgba(20, 38, 78, 0.5) 60%, rgba(20, 38, 78, 0.7) 100%)',
            }}
          />

          {/* Gold accent bar */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '8px',
              height: '100%',
              background: '#C9A23E',
            }}
          />

          {/* Content */}
          <div
            style={{
              position: 'relative',
              zIndex: 10,
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              padding: '0 80px 60px 80px',
              maxWidth: '800px',
            }}
          >
            <h1
              style={{
                margin: 0,
                fontSize: '64px',
                fontWeight: 'bold',
                color: '#F5EFDF',
                fontFamily: '"Marcellus", serif',
                lineHeight: '1.1',
                textShadow: '2px 2px 12px rgba(0, 0, 0, 0.7)',
              }}
            >
              FLORIDA WATER SPORTS COALITION
            </h1>

            <p
              style={{
                margin: 0,
                fontSize: '32px',
                fontWeight: 'bold',
                color: '#C9A23E',
                textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)',
              }}
            >
              Safer Operators · Safer Waters
            </p>

            <p
              style={{
                margin: 0,
                fontSize: '16px',
                color: '#F5EFDF',
                textShadow: '1px 1px 6px rgba(0, 0, 0, 0.7)',
              }}
            >
              Certified Water Sports Operators Across Florida
            </p>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    )
  } catch (error) {
    console.error('OG image generation error:', error)
    return new ImageResponse(
      (
        <div
          style={{
            width: '1200px',
            height: '630px',
            background: 'linear-gradient(135deg, #14264E 0%, #0E1A34 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            color: '#F5EFDF',
            fontSize: '48px',
            fontWeight: 'bold',
          }}
        >
          <div>FLORIDA WATER SPORTS COALITION</div>
          <div style={{ fontSize: '24px', marginTop: '20px', color: '#C9A23E' }}>
            Safer Vessels · Safer Waters
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    )
  }
}
