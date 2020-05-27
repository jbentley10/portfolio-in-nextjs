function ProfileImage() {
  return (
    <picture>
      <source type="image/webp" srcSet="../static/profile.webp" />
      <source type="image/jpeg" srcSet="../static/profile.jpg" />
      <img className="rounded-full h-full sm:w-full md:w-4/6 flex items-center justify-center" src="../static/profile.webp" alt="John Bentley Creative Freelance Web Designer" loading="lazy" />
    </picture>
  )
}

export default ProfileImage;