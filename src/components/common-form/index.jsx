import React from 'react'
import { Button } from '../ui/button'
import FormControls from './formControls'

const CommonForm = ({handleSubmit,btnText,formControls, formData, setFormData}) => {
  return (
    <form onSubmit={handleSubmit}>
      <FormControls formControls={formControls} formData={formData} setFormData={setFormData} />
      <Button type="submit" className="mt-5 w-full">{btnText || "Submit"}</Button>
    </form>
  )
}

export default CommonForm