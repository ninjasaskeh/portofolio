import {Tilt} from 'react-tilt';
import {motion} from 'framer-motion'
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { sertifs } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({ 
  index,
  name,
  image,
    }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 1)} className='items-center justify-center flex-row'>
      <Tilt 
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="bg-tertiary p-5 border-2 border-white rounded-2xl sm:w-[360px] w-full "
      >
        <div className='relative w-full h-[230px]'>
          <img 
            src={image}
            alt={name}
            className='w-full object-cover sm:object-fill rounded-2xl'
          />
        </div>
        <div className='mt-5'>
          <p className='m-2 text-white font-semi text-[18px] text-center'>{name}</p>
        </div>
        
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        
      </motion.div>
      <div className='w-full flex'>
      </div>
      <div className='mt-12 bg-black-100 rounded-[20px]'>
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={`${ styles.sectionSubText}`}>what have I achieved</p>
          <h2 className={`${ styles.sectionHeadText}`}>Certificates.</h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 pb-14 flex item-center justify-center flex-wrap gap-10`}>
        {sertifs.map((sertif, index) => (
          <ProjectCard
          key={sertif.name}  
          index={index}
          {...sertif}
          />
        ))}
      </div>
    </div>
    </>
  )
}

export default SectionWrapper(Works, "")