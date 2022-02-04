import React from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import { useToasts } from 'react-toast-notifications';

const SUPPORT_IMAGE_FORMAT = ['image/jpg' , 'image/jpeg']

const UploadPage = () => {

    const history = useHistory()
    const { register, handleSubmit, errors} = useForm()

    const { addToast } = useToasts()

    const onSubmit = (data) => {
        //console.log(data)
        let fileUpload = data.picture[0];
        const reader = new FileReader()
        reader.readAsDataURL(fileUpload)
        reader.onload = async(e) => {
            let base64Image = e.target.result
            // console.log(base64Image);
            const apiURL = 'https://api.codingthailand.com/api/upload'
            const response = await axios.post(apiURL,
            {
                picture : base64Image
            }
            ).catch(error => {
                console.error('There was an error!', error.message);
            });

            //alert(response.data.data.message)
            console.log(response.data.data)
            addToast(response.data.data.message , {appearance: 'success', autoDismiss: true })
            history.replace("/")
        }
        
    }
    return (
        <div>
            <div className="container mb-3 mt-4">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Upload Page</h1>
                        <form onSubmit={ handleSubmit(onSubmit) }>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlFile1">Example file input</label>
                                <input type="file" name="picture" ref={register({
                                    required : 'Please Select File',
                                    validate : { 
                                        checkFileType : (value) => {
                                            return value && SUPPORT_IMAGE_FORMAT.includes(value[0].type)
                                        }
                                     }
                                })} 
                                className={`form-control-file ${errors.picture ? "is-invalid" : ""}`}
                                id="exampleFormControlFile1" />
                                {
                                    errors.picture && errors.picture.type === 'required' && (
                                        <div className="invalid-feedback">{errors.picture.message}</div>
                                    )
                                }

                                {
                                    errors.picture && errors.picture.type === 'checkFileType' && (
                                        <div className="invalid-feedback">Please Choose New File (Support Only .jpg / .jpeg)</div>
                                    )
                                }
                            </div>
                            
                            <button type="submit" class="btn btn-primary">Upload</button>
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UploadPage
