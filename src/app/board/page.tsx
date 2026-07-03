'use client'

import { useState } from 'react'
import styles from './board.module.css'

interface BoardMember {
  id: number
  name: string
  role: string
  bio: string
  photo: string
  linkedin?: string
  email?: string
}

const BOARD_MEMBERS: BoardMember[] = [
  {
    id: 1,
    name: 'Captain Sarah Mitchell',
    role: 'President & Board Chair',
    bio: 'Sarah leads Crystal Waters Rentals on Lake Eustis with 15+ years of water sports experience.',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop',
    linkedin: 'https://linkedin.com',
    email: 'sarah@fwsc.org',
  },
  {
    id: 2,
    name: 'Captain Mike Rodriguez',
    role: 'Vice President',
    bio: 'Mike operates Tampa Bay Tours and specializes in guided waterway experiences and corporate events.',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
    linkedin: 'https://linkedin.com',
    email: 'mike@fwsc.org',
  },
  {
    id: 3,
    name: 'Dr. Robert Martinez',
    role: 'Secretary',
    bio: 'Dr. Martinez brings expertise in marine ecology and environmental stewardship from Everglades Tours.',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop',
    linkedin: 'https://linkedin.com',
    email: 'robert@fwsc.org',
  },
  {
    id: 4,
    name: 'Jessica Chen',
    role: 'Treasurer',
    bio: 'Jessica manages financial oversight and leads kayak operations across multiple waterways.',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop',
    linkedin: 'https://linkedin.com',
    email: 'jessica@fwsc.org',
  },
  {
    id: 5,
    name: 'Tommy Valdez',
    role: 'Board Member',
    bio: 'Tommy represents jet ski operators and advocates for water sports safety and accessibility.',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
    linkedin: 'https://linkedin.com',
    email: 'tommy@fwsc.org',
  },
  {
    id: 6,
    name: 'Amanda Foster',
    role: 'Board Member',
    bio: 'Amanda brings perspectives from small operator community and leads emerging industry initiatives.',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop',
    linkedin: 'https://linkedin.com',
    email: 'amanda@fwsc.org',
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

        <div className={styles.contactSection}>
          <label className={styles.emailLabel}>Contact via email</label>
          <input
            type="email"
            placeholder="your@email.com"
            className={styles.emailInput}
            onClick={e => e.stopPropagation()}
          />
          <button className={styles.contactBtn} onClick={e => {
            e.stopPropagation()
            alert(`Sending email to ${member.email}`)
          }}>
            Send
          </button>

          {member.linkedin && (
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className={styles.linkedinLink} onClick={e => e.stopPropagation()}>
              View on LinkedIn
            </a>
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
