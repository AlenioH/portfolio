import React from 'react'
import PropTypes from 'prop-types'

const GalleryItem = ({ id, source, thumbnail, caption, description }) => {
  return (
    <article key={id} className="6u 12u$(xsmall) work-item">
      <a className="image fit thumb" href={source}>
        <img
          src={thumbnail}
          style={{ height: 200 }}
          alt="random color generated in command line"
        />
      </a>

      <h3>{caption}</h3>
      <p>{description}</p>
    </article>
  )
}

GalleryItem.displayName = 'GalleryItem'
GalleryItem.propTypes = {
  id: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  toggleLightbox: PropTypes.func.isRequired,
}

export default GalleryItem
