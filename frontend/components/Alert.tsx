'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faCircleExclamation, faCircleInfo, faTriangleExclamation, faXmark } from '@fortawesome/free-solid-svg-icons'

import useAlert from "../hooks/useAlert"


const Alert = () => {
  const { alert, setAlert } = useAlert()

  const animation = `transition ease-in-out duration-300 ${alert.visible ? 'translate-y-0' : '-translate-y-full'}`
  const type = {
    success: {
      style: 'border-green-800 bg-green-600/60 text-green-800',
      icon: <FontAwesomeIcon icon={faCircleCheck} />
    },
    error: {
      style: 'border-red-800 bg-red-600/60 text-red-800',
      icon: <FontAwesomeIcon icon={faCircleExclamation} />
    },
    info: {
      style: 'border-teal-800 bg-teal-600/60 text-teal-800',
      icon: <FontAwesomeIcon icon={faCircleInfo} />
    },
    warning: {
      style: 'border-yellow-700 bg-yellow-500/60 text-yellow-700',
      icon: <FontAwesomeIcon icon={faTriangleExclamation} />
    }
  }[alert.type!]

  return (
    <div className={`flex items-center fixed inset-x-0 mx-auto w-1/2 rounded-xl mt-4 p-2 ${animation}${alert.type ? ` border ${type.style} shadow-xl` : ''}`}>
      <span className="text-2xl">{type?.icon}</span>
      <h3 className='font-bold ml-2'>{alert.text}</h3>
      <button className='ml-auto text-2xl' onClick={() => setAlert({ visible: false, type: null, text: null })}>
        <FontAwesomeIcon icon={faXmark} />
      </button>
    </div>
  )
}

export default Alert