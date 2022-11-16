import {
  faLocation,
  faLocationPin,
  faMailBulk,
  faMailForward,
  faMapLocation,
  faPhone,
  faVoicemail,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Input, OutlinedInput, Skeleton, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import BodyLayout from '../components/ui/BodyLayout';
import ContactCardItem from '../components/ui/ContactCardItem';
import PageHeading from '../components/ui/PageHeading';
import PartialUnderline from '../components/ui/PartialUnderline';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import Placeholder from '../components/ui/Placeholder';
// import sendmail from 'sendmail'

export default function Contact() {
  const [iframeLoading, setIframeLoading] = useState(true);
  const [sendingEmailStatus, setSendingEmailStatus] = useState('idle');

  const [messageError, setMessageError] = useState('');
  const [message, setMessage] = useState('');
  const validateForm = () => {
    if (message.length < 1) {
      setMessageError('*This field is required');
      return false;
    } else {
      setMessageError('');
      return true;
    }
  };
  useEffect(() => {
    if (message.length > 0) {
      setMessageError('');
    }
  }, [message]);

  const sendEmail = async () => {
    setSendingEmailStatus('sending');
    try {
      let url = process.env.url;
      if (!validateForm()) {
        throw 'form validation failed';
      }
      const resp = await fetch(`${url}/api/contact`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: document.getElementById('fullName').value,
          email: document.getElementById('email').value,
          subject: document.getElementById('subject').value,
          message: message,
        }),
      });
      const res = await resp.text();
      if (resp.status === 200) {
        setSendingEmailStatus('sent');
        document.getElementById('fullName').value = '';
        document.getElementById('email').value = '';
        document.getElementById('subject').value = '';
        setMessage('');
      }
    } catch (error) {
      console.log(error);
      setSendingEmailStatus('failed');
    }
  };
  return (
    <BodyLayout page="contact">
      <PageHeading heading="Contact" subHeading="Get in Touch" />
      <div className="max-w-maxContentWid mx-5 sm:mx-8 lg:mx-10 2xl:mx-auto my-10  grid grid-flow-row">
        {/* map display start */}
        <div className="my-10">
          <Placeholder isLoading={iframeLoading}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7880.512069730278!2d38.75840150038664!3d9.040393493760007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8f642ba9e021%3A0x2321687a606863f3!2sAddis%20Ababa%20Institute%20of%20Technology!5e0!3m2!1sen!2set!4v1667834739518!5m2!1sen!2set"
              width="100%"
              height="150"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              onLoad={() => setIframeLoading(false)}
            ></iframe>
          </Placeholder>
        </div>
        {/* map display end */}

        <div className="text-textColor1 dark:text-textColor1Dark grid grid-flow-row sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="grid grid-flow-row mb-auto gap-8 ">
            <ContactCardItem
              icon={faPhone}
              text="+251979036773"
              description="Give us a call"
            />
            <ContactCardItem
              icon={faMapLocation}
              text="Addis Ababa Ethiopia"
              description="Addis Ababa University 5kilo campus, Addis Ababa Institute of Technology"
            />
            <ContactCardItem
              icon={faMailBulk}
              text="qmemdevelopers@gmail.com"
              description="Send us an email with a brief description of your case and our team will get back to you in no time"
            />
          </div>
          <div className="grid grid-flow-row gap-8 lg:col-span-2 ">
            <div>
              <PartialUnderline text="How Can We Help You?" />
            </div>
            <div className="grid grid-flow-row gap-6">
              <form id="contactUsForm">
                <div className="grid grid-flow-row lg:grid-cols-2 gap-4">
                  <div className="grid grid-flow-row gap-6">
                    <input
                      id="fullName"
                      placeholder="Full Name"
                      className="p-2 bg-background1 dark:bg-background1Dark border-2 border-background2 dark:border-background2Dark dark:focus:border-background2Dark focus:border-background2 rounded"
                    />
                    <input
                      id="email"
                      placeholder="Email"
                      className="p-2 bg-background1 dark:bg-background1Dark border-2 border-background2 dark:border-background2Dark dark:focus:border-background2Dark focus:border-background2 rounded"
                    />
                    <input
                      id="subject"
                      placeholder="Subject"
                      className="p-2 bg-background1 dark:bg-background1Dark border-2 border-background2 dark:border-background2Dark dark:focus:border-background2Dark focus:border-background2 rounded"
                    />
                  </div>
                  <div>
                    {' '}
                    <textarea
                      required={true}
                      id="message"
                      placeholder="Message"
                      className="p-2 lg:h-full w-full bg-background1 dark:bg-background1Dark border-2 border-background2  dark:border-background2Dark dark:focus:border-background2Dark  focus:border-background2 rounded"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                    <span className="text-red-500">
                      {messageError ? messageError : null}
                    </span>
                  </div>
                </div>
              </form>
              <div className=" text-center sm:text-left">
                {sendingEmailStatus === 'sending' ? (
                  <Button placeholder={'Sending...'} />
                ) : (
                  <Button
                    placeholder={'Send message'}
                    onClick={() => sendEmail()}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </BodyLayout>
  );
}
