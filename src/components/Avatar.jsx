import { useState } from 'react'

function Avatar() {
  const [error, setError] = useState(false)

  if (error) {
    return <div className="avatar-fallback">AB</div>
  }

  return (
    <img
      src="../assets/hero.png"
      alt="Alexander Bolaños"
      className="avatar"
      onError={() => setError(true)}
    />
  )
}
export default Avatar