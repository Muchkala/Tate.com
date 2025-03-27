import { Container, Grid2 } from '@mui/material'
import React from 'react'
import './SectionBottom.scss'
import GradeSharpIcon from "@mui/icons-material/GradeSharp";  // Filled star
import StarBorderSharpIcon from "@mui/icons-material/StarBorderSharp";
import { SectionBottomData } from '../../constants/data';

export default function SectionBottom() {
  return (
    <Container>
        <Grid2 container spacing={8}>
                {
                    SectionBottomData.map(({id, title,className,imgBtm, p, name, starCount, image,})=>{
                return  <Grid2 size={{md:3}} key={id}>
                            <div className="longYBox">
                                <img src={image} alt="" />
                                <div className="starShadows">
                                {[...Array(5)].map((_, index) =>
                                    index === starCount ? (
                                        <StarBorderSharpIcon key={index} className="glowing-star" />
                                    ) : (
                                        <GradeSharpIcon key={index} className="glowing-star" />
                                    )
                                )}
                                </div>
                                <h3 className='SBType'>{title}</h3>
                                <h6 className='SBComment'>{p}</h6>
                                <h6 className='SBname'>{name}</h6>
                            <div className="ImgCard" style={{width:'min-content', height:'min-content'}}>
                                <img src={imgBtm} alt="" className='ICimg'/>
                                <div className={`${className} top-left`} style={{width:'50px', height:'50px'}}></div>
                                <div className={`${className} top-right`} style={{width:'50px', height:'50px'}}></div>
                                <div className={`${className} bottom-left`} style={{width:'50px', height:'50px'}}></div>
                                <div className={`${className} bottom-right`} style={{width:'50px', height:'50px'}}></div>
                            </div>
                        </div>
                        </Grid2>
                    })
                }
        </Grid2>
    </Container>
  )
}
