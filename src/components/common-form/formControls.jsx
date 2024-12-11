import React from 'react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Textarea } from '../ui/textarea';

const FormControls = ({ formControls, formData, setFormData }) => {
  function renderComponentByType(controlItem) {
    let element = null;
    const value = formData[controlItem?.name] || ''

    switch (controlItem?.componentType) {
      case 'input':
        element = (
          <Input
            id={controlItem?.name}
            name={controlItem?.name}
            placeholder={controlItem?.placeholder}
            type={controlItem?.type}
            value={value}
            onChange={(e)=>{
              setFormData({
                ...formData,
                [controlItem?.name]:e.target.value
              })
            }}
          />
        );
        break;
      case 'select':
        element = (
          <Select
          onValueChange={(value)=>{
            setFormData({
              ...formData,
              [controlItem?.name]:value
            })
          }}
          value={value}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder={controlItem?.placeholder} />
            </SelectTrigger>
            <SelectContent>
              {controlItem?.options && controlItem?.options?.length > 0
                ? controlItem?.options?.map(optionItem => {
                    return (
                      <SelectItem value={optionItem?.id} key={optionItem?.id}>
                        {optionItem?.label}
                      </SelectItem>
                    );
                  })
                : null}
            </SelectContent>
          </Select>
        );
        break;
      case 'textarea':
        element = (
          <Textarea
            id={controlItem?.name}
            name={controlItem?.name}
            placeholder={controlItem?.placeholder}
            type={controlItem?.type}
            value={value}
            onChange={(e)=>{
              setFormData({
                ...formData,
                [controlItem?.name]:e.target.value
              })
            }}
          />
        );
        break;
      default:
        element = <Input
        id={controlItem?.name}
        name={controlItem?.name}
        placeholder={controlItem?.placeholder}
        type={controlItem?.type}
        value={value}
            onChange={(e)=>{
              setFormData({
                ...formData,
                [controlItem?.name]:e.target.value
              })
            }}
        />;
        break;
    }
    return element; // Return the element here
  }

  return (
    <div className='flex flex-col gap-3'>
      {formControls?.map(controlItem => {
        return (
          <div key={controlItem?.name}>
            <Label htmlFor={controlItem?.name}>{controlItem?.label}</Label>
            {renderComponentByType(controlItem)}
          </div>
        );
      })}
    </div>
  );
};

export default FormControls;