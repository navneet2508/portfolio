import './style.css'
import { Grid } from '@mui/material'
import { MouseEvent, useEffect, useMemo, useState } from 'react'
// import { createTheme, ThemeProvider } from '@mui/material/styles'
import Lottie from 'react-lottie'
import about from '../../assets/gif/about.json'
import PrimaryButton from '../primary-button'
import SkillView from './skill-view'
import SocialView from './social-view'
import { Document, Page, pdfjs } from 'react-pdf/dist/esm/entry.webpack'
import 'react-pdf/dist/esm/Page/TextLayer.css'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import {
  Facebook,
  Instagram,
  Twitter,
  LinkedIn,
  GitHub,
  Pinterest,
} from '@mui/icons-material'
import {
  FACEBOOK_PROFILE,
  GITHUB_PROFILE,
  INSTAGRAM_PROFILE,
  LINKEDIN_PROFILE,
  PINTEREST_PROFILE,
  TWITTER_PROFILE,
} from '../../config/config'
import getWindowDimensions from '../../utils/get-window-dimensions'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

const Index = () => {
  const [numPages, setNumPages] = useState<any>(null)
  const [pageNumber, setPageNumber] = useState<any>(1)

  const onDocumentLoadSuccess = ({ numPages }: any) => {
    setNumPages(numPages)
  }

  const animatedAbout = {
    loop: true,
    autoplay: true,
    animationData: about,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  useEffect(() => {
    document.getElementById('defaultOpen')?.click()
  }, [])

  const AboutTabContent = useMemo(
    () => (
      <Grid container>
        <Grid item={true} xs={12} md={6}>
          {getWindowDimensions().width < 768 ? (
            <Lottie options={animatedAbout} width={332} />
          ) : (
            <Lottie options={animatedAbout} width={532} />
          )}
        </Grid>
        <Grid item xs={12} md={6}>
          <h1 className="heading-secondary">
            I create web products based on blockchain web3
          </h1>
          <p className="paragraph-primary">
            My name is Navneet, Full stack web developer with experience
            of 1 year as Intern, based on MERN Stack.
          </p>
          <PrimaryButton destination="lets-talk" title="Lets Talk" />
        </Grid>
      </Grid>
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  const SkillTabContent = useMemo(() => {
    const skillArray = [
      { color: '#fe3e57', percentage: 75, skill: 'Communication Skills' },
      { color: '#54faae', percentage: 65, skill: 'Project Management' },
      { color: '#ff8c2f', percentage: 55, skill: 'Problem Solving' },
      { color: '#f1f965', percentage: 85, skill: 'MERN Stack' },
      { color: '#ff0173', percentage: 70, skill: 'Ethereum Blockchain' },
      { color: '#39c4ff', percentage: 75, skill: 'Debugging' },
    ]
    return (
      <Grid container direction={'row'} spacing={9}>
        {skillArray.map((element) => (
          <Grid key={element.skill} item={true} xs={6} md={4}>
            <SkillView
              color={element.color}
              percentage={element.percentage}
              skill={element.skill}
            />
          </Grid>
        ))}
      </Grid>
    )
  }, [])

  const SocialTabContent = useMemo(() => {
    const socialArray = [
      {
        color: '#ea4c89',
        profileLink: GITHUB_PROFILE,
        socialName: 'GitHub',
        socialIcon: <GitHub />,
      },
      {
        color: '#3b5998',
        profileLink: FACEBOOK_PROFILE,
        socialName: 'Facebook',
        socialIcon: <Facebook />,
      },
      {
        color: '#ff8e40',
        profileLink: INSTAGRAM_PROFILE,
        socialName: 'Instagram',
        socialIcon: <Instagram />,
      },
      {
        color: '#03a9f4',
        profileLink: TWITTER_PROFILE,
        socialName: 'Twitter',
        socialIcon: <Twitter />,
      },
      {
        color: '#007aaa',
        profileLink: LINKEDIN_PROFILE,
        socialName: 'LinkedIn',
        socialIcon: <LinkedIn />,
      },
      {
        color: '#a329a6',
        profileLink: PINTEREST_PROFILE,
        socialName: 'Pinterest',
        socialIcon: <Pinterest />,
      },
    ]
    return (
      <Grid container direction={'row'} spacing={9}>
        {socialArray.map((element) => (
          <Grid key={element.profileLink} item={true} xs={6} md={4}>
            <SocialView
              color={`${element.color}`}
              profileLink={element.profileLink}
              socialName={element.socialName}
              socialIcon={element.socialIcon}
            />
          </Grid>
        ))}
      </Grid>
    )
  }, [])

  const AwardTabContent = useMemo(() => {
    const goToPrevPage = () =>
      setPageNumber(pageNumber - 1 <= 1 ? 1 : pageNumber - 1)

    const goToNextPage = () =>
      setPageNumber(pageNumber + 1 >= numPages ? numPages : pageNumber + 1)

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Document
          file={process.env.PUBLIC_URL + '/certificates.pdf'}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={console.error}
        >
          <Page pageNumber={pageNumber} />
        </Document>
        <nav className="btn-pagination-wrapper">
          <button onClick={goToPrevPage} className="btn-pagination">
            Previous
          </button>
          <button onClick={goToNextPage} className="btn-pagination">
            Next
          </button>
        </nav>
      </div>
    )
  }, [numPages, pageNumber])

  const handleOnClick = (event: MouseEvent<HTMLElement>, viewType: string) => {
    event.preventDefault()
    let tabContent = document.getElementsByClassName('tab-primary__content')
    for (let i = 0; i < tabContent.length; i++) {
      const element = tabContent[i] as HTMLElement
      element.style.display = 'none'
    }
    let tablinks = document.getElementsByClassName(
      'tab-primary__link-box__link'
    )
    for (let i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(' active', '')
    }
    document.getElementById(viewType)!.style.display = 'block'
    event.currentTarget.className += ' active'
  }

  const tabLinkArray = [
    { id: 1, tabName: 'about', open: 'defaultOpen' },
    { id: 2, tabName: 'skill', open: '' },
    { id: 3, tabName: 'social', open: '' },
    { id: 4, tabName: 'award', open: '' },
  ]

  return (
    <div className="tab-primary">
      {/* Tab links */}
      <div className="tab-primary__link-box">
        {tabLinkArray.map((element) => (
          <button
            key={element.id}
            className="tab-primary__link-box__link"
            onClick={(e) => handleOnClick(e, element.tabName)}
            id={element.open}
          >
            {element.tabName}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div id="about" className="tab-primary__content">
        {AboutTabContent}
      </div>
      <div id="skill" className="tab-primary__content">
        {SkillTabContent}
      </div>
      <div id="social" className="tab-primary__content">
        {SocialTabContent}
      </div>
      <div id="award" className="tab-primary__content">
        {AwardTabContent}
      </div>
    </div>
  )
}

export default Index
