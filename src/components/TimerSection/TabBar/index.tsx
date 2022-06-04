import React from 'react'
import { Container, Typography, Tab } from './style'

export enum TimerType {
  POMODORO = 'POMODORO',
  SHORT_BREAK = 'SHORT BREAK',
  LONG_BREAK = 'LONG BREAK'
}

// type Props = {
//   selectedTimerType: TimerType
//   setSelectedTimerType: (timerType: TimerType) => void
// }

// type TabProps = {
//   label: string
//   onSelect: () => void
// }

// const Tab = ({ label, onSelect }: TabProps) => {
//   return <Typography onPress={onSelect}>{label}</Typography>
// }

const TabBar = () => {
  const timerTypes = [
    TimerType.POMODORO,
    TimerType.SHORT_BREAK,
    TimerType.LONG_BREAK
  ]

  return (
    <Container>
      {timerTypes.map((timerType: TimerType, index: number) => (
        <Tab key={index} onPress={() => console.log(timerType)}>
          <Typography>{timerType}</Typography>
        </Tab>
      ))}
    </Container>
  )
}

export default TabBar
