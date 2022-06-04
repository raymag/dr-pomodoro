import React, { useState } from 'react'
import { Container, Text } from './style'
import TabBar, { TimerType } from './TabBar'

const TimerSection = () => {
  const [selectedTimerType, setSelectedTimerType] = useState<TimerType>(
    TimerType.POMODORO
  )

  return (
    <Container>
      {/* TabBar  */}
      <TabBar
        selectedTimerType={selectedTimerType}
        setSelectedTimerType={setSelectedTimerType}
      />
      {/* Timer  */}
      {/* Actions  */}
      <Text>Pomodoro</Text>
    </Container>
  )
}

export default TimerSection
