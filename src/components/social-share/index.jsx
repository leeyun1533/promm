import React from 'react'
import { FacebookIcon } from './facebook-icon'
import { shareToFacebook } from '../../utils/share'

import './index.scss'

export const SocialShare = ({ title, author }) => {
  const text = `Recommend on "${title}" written by @${author}`


  const onClickFacebookIcon = e => {
    e.preventDefault()
    return shareToFacebook(window.location.href, text)
  }

  return (
    <div className="social-share">
      <FacebookIcon onClick={onClickFacebookIcon} />
    </div>
  )
}
