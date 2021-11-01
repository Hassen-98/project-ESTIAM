import { useState } from 'react'
import Button from '../my-app/src/components/common/button'
import Card from '../my-app/src/components/common/card'
import breads, { Bread } from '../my-app/src/data/breads.data'
import * as Styled from './selector.styled';

interface Props {
  onProceed: (bread: Bread) => void;
}

const BreadsSelector = (props: Props) => {
  const [selectedBread, setSelectedBread] = useState('');

  return (
    <Styled.SelectorWrapper>
      <h1>Pain ou galette ?</h1>

      <Styled.ElementWrapper>
        {breads.map((bread, index) => (
          <Card
            key={index}
            title={bread.name}
            image={bread.image}
            isSelected={bread.slug === selectedBread}
            onSelect={(isSelected) => setSelectedBread(isSelected ? bread.slug : '')} />
        ))}
      </Styled.ElementWrapper>

      <Button 
        name="Continuer"
        onClick={() => props.onProceed(breads.find(bread => bread.slug === selectedBread)!!)}/>

    </Styled.SelectorWrapper>
  )
}

export default BreadsSelector
