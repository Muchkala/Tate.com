import React from 'react'
import './SectionTopLine.scss'
import { SectionTopData } from '../../constants/data'

export default function SectionTopLine() {
  return (
    <div className='sectionTopLine'>
        {
            SectionTopData.map(({id, title, image})=>{
              return    <div key={id} className="miniSBox">
                            <img src={image} alt="" />
                            <p>{title}</p>
                        </div>
            })
        }
    </div>
  )
}
