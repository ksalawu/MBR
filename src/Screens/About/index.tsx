import './styles.css';
import * as Yup from 'yup'
import { Formik } from 'formik';

export const About = () => {
    return <div className="about">
        <h1>BE AND ASSET TO THE COLLECTIVE</h1>
        <p> Music Box Radio is a collective of like minded souls with a unanimous love for all things music and entertainment, broadcasting live from the heart of London.</p>
        <p>Live shows are broadcast via this website, Sonos, the Tunein and radio.net mobile apps and on iTunes listed inside the eclectic directory.</p>
        <p>All shows are recorded and uploaded to our Mixcloud page so you never have to miss a show. <a href="www.google.com">Follow us here</a> for upload notifications:</p>
        <p>Want to talk? Get in touch.</p>
        <div className="lowerPanel">
            <div className="left">
                <div>
                    <div>info@usicboxradio.co.uk</div>
                    <div>+447497780309 studio line</div>
                    <div>(WhatsApp)</div>
                </div>
            </div>
            <div className="right">
                
                <Formik
                    initialValues={{
                        name: '',
                        email:'',
                        subject:'',
                        message:''
                    }}
                    validationSchema={Yup.object({
                        name: Yup.string().required('Required'),
                        email: Yup.string().required('Required'),
                        subject: Yup.string().required('Required'),
                        message: Yup.string().required('Required'),
                      })}
                    onSubmit={() =>{}}
                >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                }) => (
                        <form>
                            <div className="form-field-wrapper">
                                <span>name:</span>
                                <input 
                                    name="name"
                                    type="text"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.name}
                                />
                            </div>
                            <div className="form-field-wrapper">
                                <span>email:</span>
                                <input 
                                    name="email"
                                    type="text"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                />
                            </div>
                            <div className="form-field-wrapper">
                                <span>subject:</span>
                                <input 
                                    name="subject"
                                    type="text"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.subject}
                                />
                            </div>
                            <div className="form-field-wrapper">
                                <span>message:</span>
                                <textarea 
                                    rows={5}
                                    name="message"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.message}
                                />
                            </div>
                            <div className="form-field-wrapper">
                                <span><a href={`mailto:info@usicboxradio.co.uk?${
                                    "subject="+values.subject
                                }&${
                                    "body="+
                                    `${encodeURI(values.message)}%0A%0A`+
                                    `${values.name}%20(${values.email})%0A`
                                }`}>send</a></span>
                            </div>
                        </form>
                )}   
                </Formik>
            </div>
        </div>
    </div>
}