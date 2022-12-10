import React from 'react'
import FeatureHolder from './FeatureHolder'
import featureImage1 from '../images/ThuongTV/feature_1.jpg'
import featureImage2 from '../images/ThuongTV/feature_2.jpg'
import featureImage3 from '../images/ThuongTV/feature_3.jpg'

function Feature() {
  return (
    <div id='features'>
        <div className='feature-title'>
            <a>Check this out new Feature!</a>
        </div>
        <div className='a-container'>
            <FeatureHolder img={featureImage1} title='Play with toy'/>
            <FeatureHolder img={featureImage2} title='Basic play'/>
            <FeatureHolder img={featureImage3} title='2-way live feed'/>
        </div>
    </div>
  )
}

export default Feature