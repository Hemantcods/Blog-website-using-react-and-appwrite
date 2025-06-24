import React from 'react'
import {Editor} from '@tinymce/tinymce-react'
import {Controller} from 'react-hook-form'
export default function RTE({name,control,label,defaultValue=""}) {
  return (
    <div className='w-full'>
      {label && <label className='inline-block ml-1 mb-1'>{label}</label>}
      <Controller
        name={name || "content"}
        control={control}
        defaultValue={defaultValue}
        render={({field:{onChange}})=>(
          <Editor 
      initialValue='default value'
      init={
          {branding:false,
            initialValue:defaultValue,
              menubar:true,
              height: 500,
              plugins: [
                  'advlist autolink lists link image charmap print preview anchor',
                  'searchreplace visualblocks code fullscreen',
                  'insertdatetime media table paste code help wordcount'
              ],
              toolbar: 'undo redo | formatselect | bold italic backcolor | \
                  alignleft aligncenter alignright alignjustify | \
                  bullist numlist outdent indent | removeformat | help',
          }}
      onEditorChange={onChange}

    />
        )}
        />
    </div>
    

  )
}

