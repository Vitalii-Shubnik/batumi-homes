import React from 'react'
import { FiChevronsDown, FiChevronsUp } from 'react-icons/fi'
import { linksQueue } from '../shared/NameLinks'
import { Link } from 'react-scroll'

const defaultPosition = 'flex flex-col items-start'

const PageWraper = (props) => {
  return (
    <div name={props.name ? props.name : ''} className={`relative bg-black min-h-screen ${props.customPosition ? '' : defaultPosition} ${props.customClassName}`}>
      {props.children}
      <div className='absolute bottom-8 left-8 sm:bottom-12 sm:left-12 flex flex-col'>
        {!props.firstpage && (
          <Link to={linksQueue[linksQueue.indexOf(props.name) - 1]} smooth={true} duration={500}>
            <FiChevronsUp size={32} color={"#C5C0C0"} className="arrow" />
          </Link>
        )}
        {!props.lastpage && (
          <Link to={linksQueue[linksQueue.indexOf(props.name) + 1]} smooth={true} duration={500}>
            <FiChevronsDown size={32} color={"#C5C0C0"} className="arrow" />
          </Link>
        )}
      </div>
    </div>
  )
}

export default PageWraper