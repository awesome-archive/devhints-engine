import React from 'react'
import ResponsiveResizePanel from './ResponsiveResizePanel'
import SourceCodePanel from './SourceCodePanel'
import SpecimenDescriptionPanel from './SpecimenDescriptionPanel'
import { Specimen } from './types'

interface Props {
  specimen: Specimen
  id: string
}

const SpecimenPanels = (props: Props) => {
  const { specimen, id } = props

  return (
    <>
      {specimen.description ? (
        <SpecimenDescriptionPanel {...{ specimen }} />
      ) : null}
      <ResponsiveResizePanel />
      <SourceCodePanel view={specimen.view} key={id} />
    </>
  )
}

export default SpecimenPanels
