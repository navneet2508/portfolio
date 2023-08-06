import { Fragment } from 'react'
import './style.css'
import Lottie from 'react-lottie'
import hero from '../../assets/gif/hero.json'
import PrimaryTabs from '../../components/primary-tabs'
import Talk from './section-talk'
import { Facebook, Instagram, LinkedIn } from '@mui/icons-material'
import ResumeButton from '../../components/resume-button'
import {
  FACEBOOK_PROFILE,
  INSTAGRAM_PROFILE,
  LINKEDIN_PROFILE,
} from '../../config/config'

const Index = () => {
  /* A JSON object that is passed to the Lottie component. */
  const animatedHero = {
    loop: true,
    autoplay: true,
    animationData: hero,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }
  return (
    <Fragment>
      <div className="homepage__hero homepage-spacing-y">
        <div className="homepage__hero__content-box">
          <h1 className="heading-primary">
            Hi
            <br />
            I'm <span className="heading-primary--red">Navneet</span>
          </h1>
          <h4 className="homepage__hero__content-box__subtitle">
            Developer
          </h4>
          <div className="homepage__hero__content-box__social">
            <a href={FACEBOOK_PROFILE} target="_blank" rel="noreferrer">
              <Facebook
                sx={{ border: '1px solid #ea4c89', color: '#ea4c89' }}
              />
            </a>
            <a href={LINKEDIN_PROFILE} target="_blank" rel="noreferrer">
              <LinkedIn
                sx={{ border: '1px solid #007bff', color: '#007bff' }}
              />
            </a>
            <a href={INSTAGRAM_PROFILE} target="_blank" rel="noreferrer">
              <Instagram
                sx={{ border: '1px solid #dc3545', color: '#dc3545' }}
              />
            </a>
          </div>
          <ResumeButton />
        </div>
        <div className="homepage__hero__img-box">
          <Lottie options={animatedHero} width={532} speed={0.4} />
        </div>
      </div>

      <div className="homepage__about homepage-spacing-y">
        <h1 className="heading-primary">About Me</h1>
        <PrimaryTabs />
      </div>

      <div className="homepage__talk">
        <h1 className="heading-primary">Let&apos;s Talk</h1>
        <Talk />
      </div>
    </Fragment>
  )
}

export default Index
