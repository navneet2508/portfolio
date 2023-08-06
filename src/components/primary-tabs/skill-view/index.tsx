import { memo } from 'react'
import { styled } from '@mui/material/styles'
import LinearProgress, {
  linearProgressClasses,
} from '@mui/material/LinearProgress'
import './style.css'

type PropsType = {
  percentage: number
  skill: string
  color: string
}

const Index = ({ percentage, skill, color }: PropsType) => {
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    width: 300,
    height: 5,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: '#292863',
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: color,
    },
  }))

  return (
    <div className="tabs-primary__skill-view">
      <h1 style={{ color: `${color}` }}>{percentage}%</h1>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <BorderLinearProgress variant="determinate" value={percentage} />
      </div>
      <p>{skill}</p>
    </div>
  )
}

export default memo(Index)
