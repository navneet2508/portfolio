import './style.css'
import { HomeOutlined, EmailOutlined, PhoneOutlined } from '@mui/icons-material'
import { EMAIL, PHONE, ADDRESS } from '../../../config/config'
// import { useForm, SubmitHandler } from 'react-hook-form'
// import { postContact } from '../../../apis/contact'

// interface IFormInput {
//   name: string
//   email: string
//   subject: string
//   message: string
// }

const Index = () => {
  // const { register, handleSubmit } = useForm<IFormInput>()
  // const handleFormSubmit: SubmitHandler<IFormInput> = async (data) => {
  // console.log(data)
  // try {
  //   const response = await postContact(data)
  //   if (response.status === 200) {
  //     console.log('Your contact data has been submitted successfully')
  //   }
  // } catch (error) {
  //   console.log(error)
  // }
  // }

  return (
    <div id="lets-talk" className="section-talk">
      <div className="section-talk__form">
        <h2>Get In Touch</h2>
        <form
          action="https://formsubmit.co/navneety250801@gmail.com"
          method="POST"
          // onSubmit={handleSubmit(handleFormSubmit)}
        >
          <input
            // {...register('name', { required: true, minLength: 3 })}
            placeholder="Name"
            type="text"
            id="name"
            name="name"
          />
          <input
            // {...register('email', {
            //   required: 'Email is required',
            //   pattern: {
            //     value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            //     message: 'Invalid email address',
            //   },
            // })}
            placeholder="Email"
            type="text"
            name="email"
            id="email"
          />
          <input
            // {...register('subject', { required: true, minLength: 5 })}
            placeholder="Subject"
            type="text"
            id="subject"
            name="subject"
          />
          <textarea
            // {...register('message', { required: true, minLength: 3 })}
            placeholder="Message"
            name="message"
            id="message"
            cols={22}
            rows={3}
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
      <div id="contact-details" className="section-talk__info">
        <div className="section-talk__info__content">
          <div className="section-talk__info__content__icon mui-icon-with-text--alignment">
            <HomeOutlined sx={{ fontSize: 40 }} />
            <span>Residence Address</span>
          </div>
          <p>{ADDRESS}</p>
        </div>
        <div className="section-talk__info__content">
          <div className="section-talk__info__content__icon mui-icon-with-text--alignment">
            <EmailOutlined sx={{ fontSize: 40 }} />
            <span>Official Mail</span>
          </div>
          <p>{EMAIL}</p>
        </div>
        <div className="section-talk__info__content">
          <div className="section-talk__info__content__icon mui-icon-with-text--alignment">
            <PhoneOutlined sx={{ fontSize: 40 }} />
            <span>Official Phone</span>
          </div>
          <p>{PHONE}</p>
        </div>
      </div>
    </div>
  )
}

export default Index
