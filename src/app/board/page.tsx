'use client'

import { useState } from 'react'
import styles from './board.module.css'

interface BoardMember {
  id: number
  name: string
  role: string
  bio: string
  photo: string
  linkedin: string
  email: string
  phone?: string
}

const BOARD_MEMBERS: BoardMember[] = [
  {
    id: 1,
    name: 'Captain Kevin O\'Neill',
    role: 'President & Board Chair',
    bio: 'Kevin brings extensive leadership and operational expertise to the Florida Water Sports Coalition.',
    photo: '/kevin-oneill.jpg',
    linkedin: 'https://www.facebook.com/kevin.oneil.927',
    email: 'kevin@flwsc.org',
    phone: '(305) 393-6465',
  },
  {
    id: 2,
    name: 'Steve Edwards',
    role: 'Vice President',
    bio: 'Steve brings extensive industry expertise and operational leadership to the Coalition.',
    photo: '/steve-edwards.png',
    linkedin: 'https://linkedin.com/in/steve-edwards',
    email: 'Steve@flwsc.org',
    phone: '(701) 400-8287',
  },
  {
    id: 3,
    name: 'Dr. Robert Martinez',
    role: 'Secretary',
    bio: 'Dr. Martinez brings expertise in marine ecology and environmental stewardship from Everglades Tours.',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop',
    linkedin: 'https://linkedin.com/in/robert-martinez',
    email: 'robert@fwscllc.com',
    phone: '(305) 555-0189',
  },
  {
    id: 4,
    name: 'Jessica Chen',
    role: 'Treasurer',
    bio: 'Jessica manages financial oversight and leads kayak operations across multiple waterways.',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop',
    linkedin: 'https://linkedin.com/in/jessica-chen',
    email: 'jessica@fwscllc.com',
    phone: '(904) 555-0167',
  },
  {
    id: 5,
    name: 'Tommy Valdez',
    role: 'Board Member',
    bio: 'Tommy represents jet ski operators and advocates for water sports safety and accessibility.',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
    linkedin: 'https://linkedin.com/in/tommy-valdez',
    email: 'tommy@fwscllc.com',
    phone: '(727) 555-0134',
  },
  {
    id: 6,
    name: 'Amanda Foster',
    role: 'Board Member',
    bio: 'Amanda brings perspectives from small operator community and leads emerging industry initiatives.',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop',
    linkedin: 'https://linkedin.com/in/amanda-foster',
    email: 'amanda@fwscllc.com',
    phone: '(407) 555-0156',
  },
]

interface FlipCardProps {
  member: BoardMember
}

function FlipCard({ member }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div
      className={`${styles.flipCard} ${isFlipped ? styles.flipped : ''}`}
      onClick={() => setIsFlipped(!isFlipped)}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      {/* Front */}
      <div className={styles.cardFront}>
        <div className={styles.photoContainer}>
          <img src={member.photo} alt={member.name} className={styles.photo} />
        </div>
        <h3 className={styles.cardName}>{member.name}</h3>
        <p className={styles.cardRole}>{member.role}</p>
      </div>

      {/* Back */}
      <div className={styles.cardBack}>
        <p className={styles.bioParagraph}>{member.bio}</p>

        <div className={styles.contactDetails}>
          <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className={styles.linkedinLink} onClick={e => e.stopPropagation()}>
            LinkedIn Profile →
          </a>

          <div className={styles.contactInfo}>
            <p className={styles.contactLabel}>Email</p>
            <a href={`mailto:${member.email}`} className={styles.emailLink} onClick={e => e.stopPropagation()}>
              {member.email}
            </a>
          </div>

          {member.phone && (
            <div className={styles.contactInfo}>
              <p className={styles.contactLabel}>Phone</p>
              <a href={`tel:${member.phone}`} className={styles.phoneLink} onClick={e => e.stopPropagation()}>
                {member.phone}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Board() {
  return (
    <div className={styles.page}>
      {/* Header */}
      <div className={styles.header}>
        <p className={styles.eyebrow}>Leadership</p>
        <h1>Board of Trustees</h1>
        <p className={styles.subtitle}>
          Meet the experienced water sports professionals leading the Florida Water Sports Coalition.
        </p>
      </div>

      {/* Board Grid */}
      <div className={styles.container}>
        <div className={styles.boardGrid}>
          {BOARD_MEMBERS.map(member => (
            <FlipCard key={member.id} member={member} />
          ))}
        </div>
      </div>

      {/* Mission Section */}
      <div className={styles.missionSection}>
        <div className={styles.missionContent}>
          <h2>Our Mission</h2>
          <p>
            The Board of Trustees guides FWSC's mission to establish safety standards, promote responsible water sports operations, and build a thriving community of certified operators across Florida's waterways.
          </p>
        </div>
      </div>
    </div>
  )
}
